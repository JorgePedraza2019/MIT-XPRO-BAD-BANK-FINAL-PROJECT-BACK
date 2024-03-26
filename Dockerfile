# Uses a base image with Node.js 18
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files to the container
COPY . .

# Expose the port on which the application runs
EXPOSE 3001

# Start the application
CMD ["npm", "start"]
