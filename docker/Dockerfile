# Full node api necessary for initial stage
FROM node:carbon-alpine as build-stage-di

# Create app directory
# RUN mkdir -p /app
WORKDIR /app

# Override the base log level (info).
ENV NPM_CONFIG_LOGLEVEL warn
# Copy files into stage
COPY . .

# Install build tools
RUN npm install
# To fix issue building node-sass on linux
# see: https://github.com/sass/node-sass/issues/2165
RUN npm rebuild node-sass

# Verify unit tests pass
# RUN npm run unit

# Bundle our JS project
RUN npm run build

# production stage
FROM nginx:1.13.12-alpine as production-stage
# Copy nginx conf files over into prod container
COPY docker/config/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker/config/nginx/default.conf /etc/nginx/conf.d/default.conf
# Copy our JS prod bundle over into prod container httpd server root
COPY --from=build-stage-di /app/dist /usr/share/nginx/html

# Open appropriate port
EXPOSE 80


COPY entrypoint.sh .
RUN ["chmod", "+x", "./entrypoint.sh"]

ENTRYPOINT ["./entrypoint.sh"]
