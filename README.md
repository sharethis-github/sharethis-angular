# Sharethis Share Buttons - Angular

## Demo

[View the live demo here](https://sharethis-github.github.io/sharethis-angular/)

## How to use it

- Install the library using `npm install sharethis-angular`
- Add the library module to your imports

  ```js
  import { BrowserModule } from "@angular/platform-browser";
  import { NgModule } from "@angular/core";

  import { AppComponent } from "./app.component";
  import { SharethisAngularModule } from "sharethis-angular";

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, SharethisAngularModule],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}
  ```

- There are four types of components: `st-inline-share-buttons`, `st-inline-follow-buttons`, `st-sticky-share-buttons` and `st-inline-reaction-buttons`.

- All of the components receive a config param, for example:

  ```js
    <st-inline-share-buttons [config]="inlineShareButtonsConfig">
  ```

- Example of the InlineShareButtons implementation:

  ```js
  import { Component } from "@angular/core";
  import { InlineShareButtonsConfig } from "sharethis-angular";

  const inlineShareButtonsConfig: InlineShareButtonsConfig = {
    alignment: "center", // alignment of buttons (left, center, right)
    color: "social", // set the color of buttons (social, white)
    enabled: true, // show/hide buttons (true, false)
    font_size: 16, // font size for the buttons
    labels: "cta", // button labels (cta, counts, null)
    language: "en", // which language to use (see LANGUAGES)
    networks: [
      // which networks to include (see SHARING NETWORKS)
      "whatsapp",
      "linkedin",
      "messenger",
      "facebook",
      "twitter",
    ],
    padding: 12, // padding within buttons (INTEGER)
    radius: 4, // the corner radius on each button (INTEGER)
    show_total: true,
    size: 40, // the size of each button (INTEGER)

    // OPTIONAL PARAMETERS
    url: "https://www.sharethis.com", // (defaults to current url)
    image: "https://bit.ly/2CMhCMC", // (defaults to og:image or twitter:image)
    description: "custom text", // (defaults to og:description or twitter:description)
    title: "custom title", // (defaults to og:title or twitter:title)
    message: "custom email text", // (only for email sharing)
    subject: "custom email subject", // (only for email sharing)
    username: "custom twitter handle", // (only for twitter sharing)
  };

  @Component({
    selector: "app-root",
    templateUrl: '<st-inline-share-buttons [config]="config">',
    styleUrls: ["./app.component.css"],
  })
  export class AppComponent {
    config = inlineShareButtonsConfig;
  }
  ```

## Development server

- Run `ng build --project=sharethis-angular` to build the library
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files on the demo app, if you change the library make sure you re-build it to get the latest updates.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Project structure

The project is divided into two folders: `sharethis-angular` and `demo` together with the common files. `demo` is the demo application that makes use of `sharethis-angular` like shown on the `how to use` section.

The library is a simple library with 4 components, a types declaration file and a file dedicated to the load script of sharethis content.

The application is a simple application with just one component that calls all of the `sharethis-angular` components.

Both projects support test, e2e test have their dedicated folder and unit and integration tests can be in a file with `*.spec.ts` as extension.
