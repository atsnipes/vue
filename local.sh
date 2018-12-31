#!/bin/bash

# Usage info
show_help() {
cat << EOF
Usage: ${0##*/} [-ilth]
Runs the service using the local.env configuration
    -i          Runs (i)nteractive which maintains terminal session and shows logs.
    -l          Runs the container based off the 'IntelligenceNext' (l)ocal image.
    -t          Defines the (t)ag for the image to pull from DTR. Default value is 'latest-orange'.
    -h          Displays help and exits.
EOF
}

# Do not break on any exception
set -e

RED='\e[41;97m'
GREEN='\033[0;32m'
NC='\033[0m'
OPTIND=1
local_image=0
tag='latest-orange'

# Set the docker run args that were being set previously in one set of args instead of two.
run_detached_arg='-id'

image_name=vueimage
container_name=vuecontainer

# Resetting OPTIND is necessary if getopts was used previously in the script.
# It is a good idea to make OPTIND local if you process options in a function.

while getopts ilt:h opt; do
    case $opt in
        i)  run_detached_arg='-i' # Remove running detached if the user chooses
            ;;
        h)
            show_help
            exit 0
            ;;
        *)
            show_help >&2
            exit 1
            ;;
    esac
done
shift "$((OPTIND-1))" # Shift off the options and optional --.

# Switch to the dir where script resides
cd $(dirname "${BASH_SOURCE[0]}")
if [ ! $? -eq 0 ]; then
    echo "CD failed to change to pathway = '$(dirname "${BASH_SOURCE[0]}")', exiting local.sh."
    exit 1
fi

echo "Running the Vue container."
docker run $run_detached_arg --name $container_name -p 8080:80 --network DV $image_name
