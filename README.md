# Dockerised Prototype

Words and stuff

I don't know if we should serve the `dist` or `public` folder lol. Parcel generates both. At the moment, Heroku is serving `dist`.

## Docker
You will need the Docker Daemon running in order to build this out for Heroku. You simply need the Docker Client running to do this, [you can find it here](https://hub.docker.com/editions/community/docker-ce-desktop-mac).

## Installation
In the future we will have two implementations of the Prototyping kit: one that utilises Parcel, and the other: Webpack.

This is because simple prototyping in code doesn't need something as meaty as Webpack so Parcel will do just fine and run straight out of the box. Other projects might want a Webpack implementation that they can customise.

There is a `install.sh` shell script that will install the necessary files for you. Run `bash install.sh` in the project root and follow the on screen instructions. Under the hood, this will generate a slightly differently configured Dockerfile for you based on which implementation you pick.

## Password protection
You must edit the `.htpasswd` file sitting in the root of the site. Sites must be passworded to avoid them being crawled or stumbled upon.

You can find a [generator to create a file for you here](http://www.htaccesstools.com/htpasswd-generator/). Stick the line it generates into your `.htpasswd` file, replacing everything else in there.

By default, the username and password are `testing`. You MUST change this.

##  Local development

<!-- ### Build the thing
`$ docker build -t {$NAME} .` You can 'tag' (name) the image whatever you like. This is useful if you have multiple prototypes on the go.

You can also use the option `--no-cache` flag to build a clean image-->

### Run the thing
#### Installing the things
`$ npm install`

#### Start the thing
Parcel implementation: `$ npm run parcel-start`

Webpack implemention: `$ npm run webpack-watch`

#### Build the thing (build out the `dist` folder if you want to deploy straight away)
Parcel implementation: `$ npm run parcel-build`

Webpack implementation: `$ npm run webpack-build`

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

### Changing the Heroku remote
You must change your Heroku git remote to match the name of your generated app:

`$ heroku git:remote -a <app-name>`

You can check your current remotes with:

`$ git remote -v`