#!/bin/bash
yarn build
docker buildx build --pull --platform linux/amd64,linux/arm64 -t dasniko/bookbox -f ./deployment/Dockerfile . --push
