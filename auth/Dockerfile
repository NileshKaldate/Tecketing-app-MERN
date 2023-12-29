# Use an official Node.js runtime as a parent image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json .

# Install app dependencies
RUN npm install

# Copy your application code into the container
COPY . .

# Define the command to run your app
CMD ["npm", "start"]
