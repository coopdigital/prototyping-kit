#!/bin/bash
read -n 1 -p "Welcome to the Prototyping kit! Which version would you like? 1. Parcel 2. Webpack (Type '1' or '2') " answer

if [ $answer = 1 ] 
then
    printf "\n\nYou chose Parcel!\n\n"

    printf "Copying Dockerfile for Parcel..."
    printf "\n\n"

    cd installer_files
    cp Dockerfile.parcel ../Dockerfile

    printf "\n\n"
    printf "Dockerfile for Parcel complete!"
    printf "\n\n"

else
    printf "\n\n"
    printf "You chose Webpack!"
    printf "\n\n"

    printf "Unfortunately we don't have a working Webpack implemention yet. But we will do, soon!"
    printf "\n\n"
fi