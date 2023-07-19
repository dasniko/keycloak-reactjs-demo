#!/bin/bash
yarn build
docker build --pull -t dasniko/bookbox -f ./deployment/Dockerfile .
docker push dasniko/bookbox
