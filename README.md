# Keycloak React.JS Demo

Demo for React.JS and Keycloak SSO integration.

## Silent Check-SSO feature

This demo comes now with the `silent check-sso` feature, introduced in version 8.x of the Keycloak JavaScript adapter.
Therefor, see [`index.js`](./src/index.js#L40-L42), [`silent-check-sso.html`](./public/silent-check-sso.html) and of course the [official Keycloak docs of the JavaScript adapter.](https://www.keycloak.org/docs/latest/securing_apps/index.html#_javascript_adapter)

_(Silent check-sso is not the same as silent refresh for implicit flow!
Implicit flow is today considered as insecure and shouldn't be used anymore.
Instead, use standard authorization code flow with [PKCE](https://tools.ietf.org/html/rfc7636), which is also supported by Keycloak since version 7.x.)_

## Prerequisites

- based on React version >= 16.8 (using hooks) and `create-react-app`
- Keycloak server must be at least version 9.x
  (no more legacy Keycloak promise API, only native promise API)

## !!! Important Notice !!!

> **This demo is just for showing one possibility on how to configure the app when using Keycloak and it requires a certain knowledge about Keycloak SSO (installation, operation, configuration), see http://www.keycloak.org.**

## Backend service

For convenience, I provide a backend service running at the location specified in [`setupProxy.js`](./src/setupProxy.js) file.

However, there's also a swagger spec ([`backend-swagger-spec.yml`](./backend-swagger-spec.yml)) providing the API of the needed backend, so you can spin up a service on your own.
The URLs in the `securityDefinitions` section shows my local Keycloak setup, you have to adjust this possibly!
(Also don't forget to adjust the host/port in the `setupProxy.js` file, if you run your service on ohters than default.)
