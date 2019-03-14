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

    cd installer_files
    cp parcel.package.json ../package.json
    cp parcel.index.html ../src/index.html
    cp parcel.index.js ../src/js/index.js

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

    cd installer_files
    cp webpack.config.js ../webpack.config.js
    cp webpack.babelrc ../.babelrc
    cp webpack.package.json ../package.json
    cp webpack.index.html ../src/index.html
    cp webpack.index.js ../src/js/index.js
    cp webpack.exampleModule.js ../src/js/exampleModule.js

    cp webpack.dist.index.html ../dist/index.html


    

    printf "\n\n"
    printf "Added files for Webpack implementation!"
    printf "\n\n"
fi