# Keycloak React.JS Demo

Demo for React.JS and Keycloak SSO integration.

## Prerequisites

- based on React version >= 16.3 and `create-react-app`
- Keycloak server must be at least version 4.x

## !!! Important Notice !!! 

> **This demo is just for showing one possibility on how to configure the app when using Keycloak and it requires a certain knowledge about Keycloak SSO (installation, operation, configuration), see http://www.keycloak.org.**

## Backend service

For convenience, I provide a backend service running at the location specified in [`setupProxy.js`](./src/setupProxy.js) file.

However, there's also a swagger spec ([`backend-swagger-spec.yml`](./backend-swagger-spec.yml)) providing the API of the needed backend, so you can spin up a service on your own.
The URLs in the `securityDefinitions` section shows my local Keycloak setup, you have to adjust this possibly!
(Also don't forget to adjust the host/port in the `setupProxy.js` file, if you run your service on ohters than default.)
