# Use the official Node.js image as base
FROM node:latest

# Set the working directory inside the container
WORKDIR /app/frontend

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend files to the working directory
COPY . .

# Expose the port on which the React development server will run
EXPOSE 3000

# Command to run the React development server
CMD ["npm", "start"]
