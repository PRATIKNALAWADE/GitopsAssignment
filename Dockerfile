# Use a lightweight Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the application files
COPY . .

# Install dependencies
RUN npm install http path

# Expose the port
EXPOSE 8080

# Start the server
CMD [ "node", "server.js" ]
