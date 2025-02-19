# Use a node image to build the app
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the project using Vite
RUN npm run build

# Clean up unnecessary files after build
RUN rm -r src/
RUN rm -r .git 
RUN rm -r .gitignore 
RUN rm -r README.md 
RUN rm -r public/
RUN rm -r index.html 
RUN rm -r eslint.config.js 
RUN rm -r vite.config.js 
RUN rm -r package*

# Use NGINX to serve the app
FROM nginx:alpine

# Copy the build output from the first stage into the NGINX html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the default NGINX port
EXPOSE 80

# Start NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]
