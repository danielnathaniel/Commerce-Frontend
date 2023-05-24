FROM node:16-alpine

ARG AUTH0AUDIENCE
ARG BASE_URL
ARG AUTH0DOMAIN
ARG AUTH0CLIENTID

# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci 
# Build the app

RUN REACT_APP_BASE_URL=${BASE_URL} \
    REACT_APP_AUTH0AUDIENCE=${AUTH0AUDIENCE} \
    REACT_APP_AUTH0DOMAIN=${AUTH0DOMAIN} \
    REACT_APP_AUTH0CLIENTID=${AUTH0CLIENTID} \
    npm run build
    
# ==== RUN =======
RUN npm install -g serve
# Set the env to "production"
ENV NODE_ENV production
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000
# Start the app
CMD [ "serve", "-s", "build" ]
