FROM node:24-alpine

WORKDIR /usr/app

RUN corepack enable

# install dependencies
COPY ./package.json ./pnpm-lock.yaml ./pnpm-workspace.yaml ./

RUN pnpm ci

# install app itself
COPY . .

# perform build script
RUN pnpm run build
