FROM node:11.10.0-alpine

WORKDIR /code
ADD . /code

RUN npm install parcel-bundler

EXPOSE 1234

CMD ["npm", "run-script", "build"]