FROM node:24-alpine

WORKDIR /usr/app

# install dependencies
COPY ./package.json ./package-lock.json ./

RUN NODE_DISABLE_COMPILE_CACHE=1 npm ci \
      --cache /tmp/npm-cache && \
    rm -rf /tmp/npm-cache

# install app itself
COPY . .

# perform build script
RUN npm run build
