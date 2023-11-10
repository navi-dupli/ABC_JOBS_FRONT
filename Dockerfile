# Use an official Node.js runtime as a parent image
FROM node:16 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI globally (optional but can be helpful)
RUN npm install -g @angular/cli@14.2.5

# Install project dependencies
RUN npm install

# Copy the entire application to the container
COPY . .

# Build the Angular application for production
RUN ng build

# Use an official Nginx runtime as a parent image
FROM nginx:alpine AS ngi

# Copy the built Angular app to the default Nginx web server location
COPY --from=build app/dist/abc-jobs /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
# Expose port 80
EXPOSE 80
