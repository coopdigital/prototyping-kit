# Dockerised Prototype

Words and stuff

I don't know if we should serve the `dist` or `public` folder lol. Parcel generates both. At the moment, Heroku is serving `dist`.

##  Local development

<!-- ### Build the thing
`$ docker build -t {$NAME} .` You can 'tag' (name) the image whatever you like. This is useful if you have multiple prototypes on the go.

You can also use the option `--no-cache` flag to build a clean image-->

### Run the thing
####
`$ npm install` - Parcel and it's deps

#### Start Parcel service
`$ npm run start`

#### Building out dist folder (not really needed tbh)
`$ npm run build`

## Deploying to Heroku

Something something why containers are good

### Deploying for the first time

You may find this takes ~10 seconds to build (for a vanilla clone of the repo). Don't worry about it, Docker is smart enough to reuse stuff where it can so future deployments will take less time.

```
$ heroku container:login
$ heroku create
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

### Password protection
Navigate into the `dist` directory and run the following to create a new username/password.

` $ htpasswd -c .htpasswd [username]`