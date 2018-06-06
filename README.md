# Keycloak React.JS Demo

Demo for React.JS and Keycloak SSO integration.

## Prerequisites

- based on React version >= 16.3 and `create-react-app`
- Keycloak server must be at least version 4.x

## !!! Important Notice !!! 

> **This demo is just for showing one possibility on how to configure the app when using Keycloak and it requires a certain knowledge about Keycloak SSO (installation, operation, configuration), see http://www.keycloak.org.**

## Backend service

There has to be a backend service running.
Currently, this project is configured (see `proxy` in `package.json`) to have a backend service running at `localhost:8081`.

For my demo purposes, I'm using [dasniko/keycloak-javaee-demo](https://github.com/dasniko/keycloak-javaee-demo) as a possible example.

But there's also a swagger spec ([backend-swagger-spec.yml](./backend-swagger-spec.yml)) providing the API of the needed backend, so you can spin up a service on your own.
Don't forget to adjust the host/port in the `proxy` section of `package.json`, if you run your service on ohters than default.

_(currentlly I'm working on a ready-to-use-service which I can provide for your convenience)_
