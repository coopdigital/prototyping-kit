# Dockerised Prototype

You can visit #prototyping-kit on Slack for questions, support and requests.

## Docker
You will need the Docker Daemon running in order to build this out for Heroku. In other words, you need to download and install the Docker Client, [you can find it here](https://hub.docker.com/editions/community/docker-ce-desktop-mac).

## Installation
There are two implementations of the prototyping kit to choose from; they're based on **Parcel** and **Webpack**.

Parcel is ideal for when you want something lightweight, to get something up quickly with live reload and the basics.

Webpack can handle ES6 to bundles and PostCSS and all that cool stuff. 

The feature set for either isn't decided yet, please write issues and request stuff!

There is a `install.sh` shell script that will install the necessary files for you. Run `bash install.sh` in the project root and follow the on screen instructions. Under the hood, this will generate a different codebase for you depending on which implementation you choose.

## Password protection
You must edit the `.htpasswd` file sitting in the root of the site. Sites must be passworded to avoid them being crawled or stumbled upon.

You can find a [generator to create a file for you here](http://www.htaccesstools.com/htpasswd-generator/). Stick the line it generates into your `.htpasswd` file, replacing everything else in there.

By default, the username and password are `testing`. You MUST change this.

##  Local development

### Run the thing
#### Installing the things
`$ npm install`

#### Start the thing
Parcel implementation: `$ npm run parcel:start`

Webpack implemention: `$ npm run webpack:watch`

#### Build the thing (build out the `dist` folder if you want to deploy straight away)
Parcel implementation: `$ npm run parcel:build`

Webpack implementation: `$ npm run webpack:build`

## Deploying to Heroku

Something something why containers are good

### Deploying for the first time

You may find this takes ~10 seconds to build (for a vanilla clone of the repo). Don't worry about it, Docker is smart enough to reuse stuff where it can so future deployments will take less time.

```
$ heroku container:login
$ heroku create <app-name>
$ heroku container:push web
$ heroku container:release web
$ heroku open
```

### Deploying after the initial deployment

No need to create a new app each time. We can only have 5 each on the Co-op account anyways.

```
$ heroku container:push web
$ heroku container:release web
$ heroku open
```

You can look at the Heroku logs with `$ heroku logs --tail` incase of an error.

## FAQ

Q: **I see a "Welcome to nginx!" page!**

A: You will need to build your `dist` folder. You do this by running the `build` task. In the case of the Webpack implementation, this will be `$ npm run webpack:build`.

Q:**Hmm, Parcel generates both a `dist` and a `public` folder. Which should I use?**

A: Honestly, no idea atm! Heroku is serving `dist` at the moment. 