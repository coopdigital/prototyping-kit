# Dockerised Prototype

##  Local development

### Build the thing
`$ docker-compose run web npm install`

You can also use the option `--no-cache` flag to build a clean image

### Run the thing
`$ docker-compose up`

## Building for production
`$ docker-compose run web npm run-script build`

## Deploying to Heroku
<!-- 1. `$ heroku login` - ensure you're logged into the correct Heroku instance (coopdigital)
2. `$ heroku create` - create a new Heroku instance to deploy into
3. `$ heroku stack:set container` - Set the 'stack' of the app to `container`
4. `$ git push heroku master`

After these initial steps, it's a case of doing a `$ git push heroku master` as usual. -->

1. `$ heroku container:push web`
2. `$ heroku container:release web`


You can look at the Heroku logs with `$ heroku logs --tail` incase of an error.

After these initial steps, it's a case of doing a `$ git push heroku master` as usual.

heroku container:push web
heroku container:release web

heroku logs --tail