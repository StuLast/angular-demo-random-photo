# Photo

This app is a demo created to demonstrate Angular JS.  The app makes use of the Unsplash.com API.  Because of the risk of overusing the Unsplash API limits, this app does not have a live demo, but you can clone it to your own machine, generate your own Unsplash API Access Key, and run that app locally.  I recommend you keep this as a local app only, again to avoid the risk of abusing the Unsplash API limits.  

In the wild, I'd create an interim API service to handle the Unsplash API calls, along with some throttling/timeouts, and then hook into that from the Angular SPA.  This would also do a far better job of keeping my API credentials safe.

## Setup

To run this small app, you will need to signup to unsplash.com, create an application and grab the access key.  To use the access key in your version of the app, you should make a copy of env.template.ts in the src/environments directory and rename it as env.ts.  The paste your access key into the field named "__ACCESS_KEY".  Once you've done this, you should be able to follow the instructions below in the  "Angular Stuff" section to get the app up and running on a Development Server.

# Angular Stuff

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
