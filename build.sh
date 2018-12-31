#!/bin/sh
date +"[build] %T Starting..."
set -e

echo $MYGET_URL
# Build the docker image
docker build --file ./docker/Dockerfile --no-cache --tag vueimage --build-arg MYGET_URL=$1 .

# Done
date +"[build] %T Complete!"
