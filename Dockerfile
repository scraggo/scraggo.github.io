# Use the official Node.js 16 image
FROM node:16-alpine

# Install Python 3 and pip
RUN apk add --no-cache make python3 vips-dev binutils gcc g++ libc6-compat autoconf automake libtool

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) first
COPY package*.json ./

# Install dependencies (including devDependencies for build/deploy)
RUN npm install --legacy-peer-deps gatsby-cli@2 --no-audit && \
  npm install --legacy-peer-deps --no-audit

#RUN npm install -g --legacy-peer-deps gatsby-cli@2 --no-audit

# Copy the rest of the application files
COPY . .

#COPY /usr/local/bin/gatsby /usr/local/bin/gatsby

# Expose the port Gatsby runs on (default: 8000, but you're using 8080)
EXPOSE 8080

# Command to run the app in development mode
#CMD ["npm", "run", "develop"]
