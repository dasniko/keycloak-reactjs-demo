# Keycloak React.JS Demo

Demo and reference implementation for React.JS and Keycloak IAM & SSO integration.

With this approach, there's no need for 3rd party dependencies (besides the official default `keycloak-js` lib) and custom components base on auth state are implemented with ease and best developer experience.

## YouTube videos

There are three videos on YouTube about this demo repository and how to integrate your React.js based application with Keycloak:

### Part 1: Configuration & Usage, w/o 3rd party libs
[![](http://img.youtube.com/vi/q50LxyGtEf0/0.jpg)](http://www.youtube.com/watch?v=q50LxyGtEf0 "")  
https://youtu.be/q50LxyGtEf0

### Part 2: Conditional rendering of components
[![](http://img.youtube.com/vi/zIoWxY3Xhnw/0.jpg)](http://www.youtube.com/watch?v=zIoWxY3Xhnw "")  
https://youtu.be/zIoWxY3Xhnw

### Part 3: React Router Integration, depending on Keycloak Roles
[![](http://img.youtube.com/vi/es8sf8D7UyQ/0.jpg)](http://www.youtube.com/watch?v=es8sf8D7UyQ "")  
https://youtu.be/es8sf8D7UyQ

> Please check out also my [entire Youtube Channel](https://www.youtube.com/c/NikoKöbler?sub_confirmation=1) with various videos on Keycloak and stuff around:

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
