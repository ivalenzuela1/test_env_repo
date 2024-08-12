# Use the official lightweight Node.js 18 image.
# https://hub.docker.com/_/node
FROM node:21-alpine

# Set the default environment file to production, can be overridden by --build-arg
ARG ENV_FILE=.env.production
ENV ENV_FILE=${ENV_FILE}

# Set the working directory in the Docker container
WORKDIR /app

# Copy the specified environment file into the container
COPY ${ENV_FILE} .env.local

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code to the image filesystem.
COPY . .

# Load environment variables and build the Next.js app
RUN . .env && npm run build

# Expose the port the app runs on
EXPOSE 3000

# Run the web service on container startup.
CMD [ "npm", "start" ]