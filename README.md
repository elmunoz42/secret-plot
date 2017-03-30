# SecretPlot

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

# secretPlot

#### By Maggie Harrington, Stephanie Spears, Carlos Munoz Kampff

## Description

Web-app that game-ifies guerrilla gardening with map functionality, garden plot creation and gardening blog.

## Setup/Installation Requirements
* Clone project
* Open index.html

## See this page at this URL
<!-- TODO -->


## Known Bugs
* No known bugs. We would like to do further work to allow for multiple user log-ins, garden-specific blogs and the possibility to store multiple new garden plot locations.

## Support and contact details
* No support

## Technologies Used
* HTML
* CSS
* JavaScript
* Angular-CLI
* jQuery
* Bootstrap
* git
* GoogleMapsAPI

## Development Planning for version 2.0 (Angular-CLI port)
|Status|Objective | Strategy |
|----------|----------|----------|
|Done|1) Display a list of garden-plots. | Use a constructor in component and display us ngFor data binding|
|ToDo|2) Create CRUD functionality for garden-plots. | Use data-binding and show-hide forms |
|ToDo|3) Create user interface and functionality for tracking watering of plot. | Use `this.currentTime.getDate()` and a function in the back end and a button with (click) binding.|
|ToDo|4) Color changes to describe watering status. | Use [class] binding. |
|ToDo|5) Different kinds of plots appear by neighbourhood. | ? |


## Specifications from version 1.0 to Port over.
|Desired Behavior | Example Input | Example Output |
|:----------------|:-------------:|---------------:|
|1) User chooses to find a secretPlot and is shown a map| click on "find a secretPlot" | display: map with secretPlot locations|
|2) User picks out a secretPlot from the map| click on plot button | secret Plot description and pictures blog show up |
|3) User chooses to create a secretPlot and gets directed to a form| click on "create a secretPlot" | New plot stats appear on the respective map location with descriptions on our page and in map infoWindow|
|4) User chooses to create a user account. | click on "create a profile" | user is prompted to create a profile name and password.|
|5) User chooses to login to existing account. | click on "login" and enter correct pre-existing info | User is greeted and page is updated to acknowledge login status.|
|6) User is prompted to retry login. | click on "login" and enter incorrect username and password. | User is informed of login fail and is informed to try again.|
|7) User chooses to "plant a message" in the garden blog. | click on "plant a message" and input name and message. | message and name prepend the blog showing history of previous blog-posts.|

## Copyright (c)
* 2017 Maggie Harrington, Stephanie Spears, Carlos Munoz Kampff

## License
* MIT

*end specifications for MVP


* End specifications
## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
