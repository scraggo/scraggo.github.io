---
layout: post
title:  "Using a Class / OOP to Organize a Simple Game"
date:   2017-09-02 19:45:31 +0530
categories: ["python"]
author: "Dave Cohen"
---

# Using a Class / OOP to Organize a Simple Game

Reading about object-oriented design in programming used to excite and intimidate me at the same time. I worked through a number of excellent tutorials and books on the subject, but nothing really helped me apply the concepts to my own code. I decided to take a stab at converting a working program that *didn't* use OOP and organize it with a single class. 

The program I chose was [Guess the Number](https://inventwithpython.com/chapter4.html) written by Al Sweigart for his book Invent Your Own Computer Games with Python. This book is an excellent way to learn Python 3 (not to mention fun!) 

After you've studied the code, you'll notice that the game runs only once. There are no functions, only global variables. It does well for its purpose as a program that teaches beginners, but it's not extendable as-is. You could certainly wrap it all in a single-function, then wrap that function in a `while` loop, and that would solve the above problems, but I wanted to go beyond this simple addition.

The full code for the class-extended program is [here](https://github.com/scraggo/Python-Small-Projects/blob/master/number-guess-oop.py). Below, I will explain the additions and changes from adding object-orientation.

```
class Game:
    def __init__(self, high_num, myName):
        self.high_num = high_num          #the highest possible number that can be chosen
        self.myName = myName              #the user's name
        self.guessesTaken = 0             #the initial number of guesses taken
        self.number = random.randint(1, self.high_num)  #the number the computer chooses
        self.guess = None                 #the user's guess
```
To initiate the `class`, we use the `__init__` method. Adding `high_num` and `myName` parameters allowed me to add some configurations to the game. `high_num` allows me to set a game to go up to 20 (as in the original) or lower (to make the game easier) or higher (to make the game more difficult). [I'll discuss this further when we get to the `main()` block.] A huge advantage from the standpoint of code-organization was being able to set most of the variables in the game at the outset. These include the number of guesses taken, the number that the user tries to guess, and the user's guess

```
class Game:
    ...

    def get_guess(self):
        print('Take a guess.')
        try:
            self.guess = int(input())   # the state of this variable is changed of the class instance! 
                                        # see more below.
        except ValueError:
            print('Not a valid guess.')
            return False
            
        return True
```

`get_guess()` is one of the two methods in the class. It modifies the `self.guess` if the user inputs an integer, then returns `True`. If not, the function returns `False` after an error message. It doesn't add a guess to self.guessesTaken.

```
class Game:
    ...

    def play(self):
        print('Well, {},  I am thinking of a number between 1 and {}.'
            .format(self.myName, self.high_num))
        while self.guessesTaken < 6:
            if not self.get_guess():
                continue
            # else: self.guess gets changed in get_guess function

            self.guessesTaken += 1
        
            if self.guess < self.number:
                print('Your guess is too low.')
        
            if self.guess > self.number:
                print('Your guess is too high.')
        
            if self.guess == self.number:
                break

        if self.guess == self.number:
            print('Good job, {}! You guessed my number in {} guesses!'
                .format(self.myName, self.guessesTaken))
        else:
            print('Nope. The number I was thinking of was', self.number)
```
I find it a little disadvantageous to have to put `self` in front of my variables, but it's only necessary if the variables determine the state of the game. (If I wanted to put a non-state-changing variable in, there's no need for `self` in front of it, but I wouldn't be able to access the variable outside of the function.) The great thing about `self.` is that you can *modify the variable in multiple functions without returning it*. This is excellent from a design perspective - there's no need to pass a parameter from a function return to another function's input. 

```
def main():
    print('Hello! What is your name?')
    myName = input()
    print("Right on, {}! We've got 2 brands of game here.".format(myName))

    while True:
        print('Type 1 for easy or 2 for difficult guessing game. Type q to quit.')
        user_choice = input()

        if user_choice.lower().startswith('q'):
            print("Goodbye!")
            break

        try:
            user_choice = int(user_choice)
            if user_choice not in [1,2]:
                continue
        except ValueError:
            continue

        if user_choice == 1:
            # make easy game
            easy_game = Game(20, myName)
            # play easy game
            easy_game.play()
            
        elif user_choice == 2:
            # make difficult game
            diff_game = Game(30, myName)
            # play difficult game
            diff_game.play()

        print("\nHow about another?")
```

The `main()` function is the main entry point of the program. We greet the user, get his/her name in `myName`, then give them the choice of an easy or hard game (with the `user_choice` variable). After this, you can see that `if user_choice == 1`, we instantiate an "easy" game with `easy_game = Game(20, myName)`. The hard game is instantiated `if user_choice == 2`, with `diff_game = Game(30, myName)`. Each instance uses the `play()` method to run a single version of the game. The end of the `main()` function displays "How about another?" and the while loop starts over.

```
# if __name__ == 'main':
#     main()

main()
```

To run the program, you may choose the commented out module method, or simply use `main()`. Don't forget to comment out one or the other.

That's it! If you'd like to contact me with questions or corrections, please do so with the form below. Thank you!