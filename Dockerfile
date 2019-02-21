# FROM node:latest

# ENV NODE_ENV development

# WORKDIR /app

# VOLUME /app

# RUN yarn global add parcel-bundler

# Dockerfile.nodejs

FROM node:11.10.0

WORKDIR /code
ADD . /code

# RUN yarn global add parcel-bundler
RUN npm install parcel-bundler