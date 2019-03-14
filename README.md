# Weblectex

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#Lection 2 angular deep dive

https://desktop.github.com/

npm i -g rxjs@latest
npm i -g rxjs-tslint
npm i -g zone@latest
npm i -g @angular/cli@latest

##problems with angular

npm install --save--dev @angular/cli@latest
npm update @angular/cli

npm i --save bootstrap@latest

..angular.json
"node_modules/bootstrap/dist/css/bootstrap.min.css",

##template

`@Component({
  selector: 'app-root',
  template: `<app-contact></app-contact>
<app-contact></app-contact>`,
  styleUrls: ['./app.component.css']
})`

создайте три компонента и один вложенный компонент ангуляра, для лабораторной работы
e.g. `
ng g c burger
ng g c navbar
ng g c maintext`

npm install --save angular-in-memory-web-api

ng g s backend

import {InMemoryDbService} from 'angular-in-memory-web-api'

ng g s contact

<h2><a [routerLink] = "'/contacts'">Contacts</a></h2>
