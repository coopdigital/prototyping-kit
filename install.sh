#!/bin/bash
read -n 1 -p "Welcome to the Prototyping kit! Which version would you like? 1. Parcel 2. Webpack (Type '1' or '2') " answer

if [ $answer = 1 ] 
then
    printf "\n\nYou chose Parcel!\n\n"

    printf "Copying files necessary for Parcel implementatoon..."
    printf "\n\n"

    cd installer_files
    cp parcel.package.json ../package.json

    printf "\n\n"
    printf "Added files for Parcel implementation!"
    printf "\n\n"

else
    printf "\n\n"
    printf "You chose Webpack!"
    printf "Copying files necessary for Webpack implementatoon..."
    printf "\n\n"

    cd installer_files
    cp webpack.config.js ../webpack.config.js
    cp webpack.package.json ../package.json

    printf "\n\n"
    printf "Added files for Webpack implementation!"
    printf "\n\n"
fi