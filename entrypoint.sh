#!/bin/sh

if [ ${DEBUG} -eq 1 2> /dev/null ]; then
    echo "I am in DEBUG mode and going to sleep for 5 minutes, good luck!"
    sleep 15m
    echo "I am done sleeping."
else
    nginx -g "daemon off;"
fi
