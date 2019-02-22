FROM node:11.10.0

WORKDIR /code
ADD . /code

RUN npm install parcel-bundler

# Heroku runs docker apps a a non-root user
RUN adduser -D heroku-user
USER heroku-user