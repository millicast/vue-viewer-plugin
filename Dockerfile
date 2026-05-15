FROM node:24-alpine AS builder

WORKDIR /usr/app

# install dependencies
COPY ./package.json ./pnpm-lock.yaml ./pnpm-workspace.yaml ./

RUN corepack enable && \
    pnpm ci

# install app itself
COPY . .

# perform build script
RUN pnpm run build
