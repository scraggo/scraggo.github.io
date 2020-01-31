---
type: post
title: 'Catching and handling different types of errors in promise chains'
date: 2019-04-04 01:45:31 +0530
categories: ['tech']
tags: ['JavaScript']
author: 'Dave Cohen'
redirect_from:
  - /tech/catching-handling-errors-promise-chains/
  - /javascript/2019/04/03/catching-handling-errors-promise-chains.html
---

When you need to make sequential API calls, promise chains are a reliable way to go. It gets a little tricky when you need to throw and handle errors differently at different points in the chain. This post will go into:

- throwing specific types of errors using `Promise.reject`
- creating an object literal dictionary to handle logic
- gracefully handling the errors differently at the end of the chain

This article is where I learned these techniques -> [Error handling in long Promise chains – Arthur Xavier – Medium](https://medium.com/@arthurxavier/error-handling-in-long-promise-chains-155f610b5bc6)

## Overview

- Every service call (promise) gets its own `.catch`.
- This `.catch` will send a `Promise.reject(<your message here>)`.
- At the end of the service call promise chain is a `.catch` that handles all the errors.

## What we're trying to do

Changing a password for a user account is an operation that requires some security measures. In our case, before allowing the password to change, we are going to validate the current password. This requires an API call. If this first call returns successfully, we can then update the password which also requires an API call. If second (and final) call returns successfully, we'll display a success message. Here's the main promise-chain:

```js
// inside a React class
handleChangePassword = (password1, password2) => {
  return this.validateCurrentPassword(password1)
    .then(() => this.updatePassword(password2))
    .catch(err => this.handleError(err));
};
```

1. We call `validateCurrentPassword`, then
2. We call `updatePassword`

Let's take care of the error cases first.

## Error handling

We can't assume the two API calls will be successful. Above, there's a `.catch` which will handle errors as we see fit. One `.catch` is _sometimes_ enough, but in our case, we want to be very specific about catching errors:

- if error.message is `invalid_credential` or `weak_password`, display their corresponding messages
- if error.message doesn't match one of the above, we'll display a generic message.

Also notice `errorMessageDict`. I vastly prefer using a dictionary mapping of results over conditional blocks like `if (message === 'one') { error = "this is the ONE error"} else if (...)` etc.

```js
// this object is declared before the class
const errorMessageDict = {
  invalid_credential: "Unable to verify user or current password.",
  weak_password: "New password isn't strong enough."
};

class ResetPassword extends Component {
//...

// this code is part of a React class component
displayError = error => {
  this.setState({ error, success: false });
};

handleError = err => {
  const { message } = err;
  // here is where we see if message is in `errorMessageDict`. If not, it'll be
  // undefined and it'll return a default.
  this.displayError(errorMessageDict[message] || "Unable to update password.");
  return { error: true };
};
```

Now, let's go into sending specific error messages into the above handler.

## Promise.reject to throw specified errors

Here's where it all comes together. Both API calls have their own `.catch`. This way, we are being detailed about the API call control flow. In each `.catch` is a `Promise.reject`. You can use `throw new Error('...')` but I like this better. It sends a clear message to the developer that we're **not** trying to crash the application, we're sending a message to our error handler.

Also notice how we are always returning the API call. Without doing so, we wouldn't be able to chain the API calls.

```js
// again this code is part of a React class component
displaySuccess = () => {
  this.setState({ success: true, error: false });
};

validateCurrentPassword = oldPassword => {
  const { user } = this.props;
  return APICallToValidateUser(user, oldPassword).catch(() =>
    Promise.reject(new Error('invalid_credential'))
  );
};

updatePassword = newPassword => {
  return APICallToUpdatePassword(newPassword)
    .then(() => {
      this.displaySuccess();
      return {};
    })
    .catch(err => {
      if (err.code === 'auth/weak-password') {
        return Promise.reject(new Error('weak_password'));
      }
      return Promise.reject(new Error('generic'));
    });
};
```

Again, this article is where I learned these techniques -> [Error handling in long Promise chains – Arthur Xavier – Medium](https://medium.com/@arthurxavier/error-handling-in-long-promise-chains-155f610b5bc6)

I hope this post was helpful, thanks for reading!
