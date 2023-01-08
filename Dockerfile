# Use an official Node.js runtime as a base image
FROM node:12.20.0-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json file to the working directory
COPY package.json .

# Install dependencies
RUN npm install

# Copy the rest of the source code to the working directory
COPY . .

# Expose port 3000 to the host
EXPOSE 3000

# Run the React application
CMD ["npm", "start"]