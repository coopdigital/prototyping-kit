#!/bin/bash

printf "\e[36m
/-' _ __ _  _    _  _ _ _|_ _ _|_  _ . _  _   | ._|_
\_,(_)  (_)|_)  |_)| (_) | (_) |\/|_)|| |(_|  |<| | 
           |    |               / |       _|        "

printf "\e[39m\n\n"

read -n 1 -p "Welcome to the Prototyping kit! Which version would you like? 1. Parcel 2. Webpack (Type '1' or '2') " answer

if [ $answer = 1 ] 
then
    printf "\n\nYou chose Parcel!\n\n"

    printf "Copying files necessary for Parcel implementatoon..."
    printf "\n\n"

    mkdir src
    mkdir src/js
    mkdir src/scss

    cd installer_files
    cp parcel.package.json ../package.json
    cp parcel.index.html ../src/index.html
    cp parcel.main.js ../src/js/main.js
    cp parcel.main.scss ../src/scss/main.scss

    rm -rf installer_files

    printf "\n\n"
    printf "Added files for Parcel implementation!"
    printf "\n\n"

else
    printf "\n\n"
    printf "You chose Webpack!"
    printf "\n\n"
    printf "Copying files necessary for Webpack implementation..."
    printf "\n\n"

    mkdir dist
    mkdir src
    mkdir src/js
    mkdir src/scss
    mkdir src/templates
    mkdir src/templates/partials
    
    cd installer_files
    cp webpack.config.js ../webpack.config.js
    cp webpack.babelrc ../.babelrc
    cp webpack.postcss.config.js ../postcss.config.js
    cp webpack.package.json ../package.json
    cp webpack.exampleModule.js ../src/js/exampleModule.js
    cp webpack.main.js ../src/main.js
    cp webpack.main.scss ../src/scss/main.scss

    # Nunjucks partials
    cp webpack.index.njk ../src/templates/index.njk
    cp webpack._header.njk ../src/templates/partials/_header.njk
    cp webpack._nav.njk ../src/templates/partials/_nav.njk
    cp webpack._footer.njk ../src/templates/partials/_footer.njk

    rm -rf installer_files

    printf "\n\n"
    printf "Added files for Webpack implementation!"
    printf "\n\n"
fi