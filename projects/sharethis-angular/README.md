# sharethis-angular
ShareThis Share Buttons for Angular apps/sites. Empower your online audience to share and amplify your content on social networks such as Facebook, WhatsApp, Linkedin, Twitter and many more. Includes four types of share buttons - Inline Share Buttons, Sticky Share Buttons, Inline Follow Buttons and Inline Reaction Buttons.
## Demo

[View the live demo here](https://sharethis-github.github.io/sharethis-angular/)

## Requirement
Angular 14.1.0 or higher
## Installation
#### npm
```bash
npm install sharethis-angular
```
#### Add SharethisAngularModule module
In module file, for example: ``/<project-name>/src/app/app.module.ts``
```js
import { SharethisAngularModule } from 'sharethis-angular';
```
```js
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharethisAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

#### Customize component configuration
In component file, for example: ``<project-name>/src/app/app.component.ts``
```js
import { Component } from '@angular/core';
import { InlineShareButtonsConfig } from 'sharethis-angular';

const inlineShareButtonsConfig:InlineShareButtonsConfig = {
  alignment: 'center', // alignment of buttons (left, center, right)
  color: 'social', // set the color of buttons (social, white)
  enabled: true, // show/hide buttons (true, false)
  font_size: 16, // font size for the buttons
  labels: 'cta', // button labels (cta, counts, null)
  language: 'en', // which language to use (see LANGUAGES)
  networks: [
  // which networks to include (see SHARING NETWORKS)
  'whatsapp',
  'linkedin',
  'messenger',
  'facebook',
  'twitter',
  ],
  padding: 12, // padding within buttons (INTEGER)
  radius: 4, // the corner radius on each button (INTEGER)
  show_total: true,
  size: 40, // the size of each button (INTEGER)
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sharethis-angular-test';
  inlineShareButtonsConfig = inlineShareButtonsConfig;
}
```

#### Add component to HTML
In HTML file, for exampe: ``<project-name>/src/app/app.component.html``
```html
<st-inline-share-buttons [config]="inlineShareButtonsConfig"></st-inline-share-buttons>
```

You can also use 3 other types of share buttons:
```html
<st-inline-follow-buttons [config]="inlineFollowButtonsConfig"></st-inline-follow-buttons>
<st-inline-reaction-buttons [config]="inlineReactionButtonsConfig"></st-inline-reaction-buttons>
<st-sticky-share-buttons [config]="stickyShareButtonsConfig"></st-sticky-share-buttons>
```

## Share Button Configurations
#### Inline Share Buttons
```js
import { InlineShareButtonsConfig } from 'sharethis-angular';

const inlineShareButtonsConfig:InlineShareButtonsConfig = {
  alignment: 'center', // alignment of buttons (left, center, right)
  color: 'social', // set the color of buttons (social, white)
  enabled: true, // show/hide buttons (true, false)
  font_size: 16, // font size for the buttons
  labels: 'cta', // button labels (cta, counts, null)
  language: 'en', // which language to use (see LANGUAGES)
  networks: [
  // which networks to include (see SHARING NETWORKS)
  'whatsapp',
  'linkedin',
  'messenger',
  'facebook',
  'twitter',
  ],
  padding: 12, // padding within buttons (INTEGER)
  radius: 4, // the corner radius on each button (INTEGER)
  show_total: true,
  size: 40, // the size of each button (INTEGER)
  // OPTIONAL PARAMETERS
  url: 'https://www.sharethis.com', // (defaults to current url)
  image: 'https://bit.ly/2CMhCMC', // (defaults to og:image or twitter:image)
  description: 'custom text', // (defaults to og:description or twitter:description)
  title: 'custom title', // (defaults to og:title or twitter:title)
  message: 'custom email text', // (only for email sharing)
  subject: 'custom email subject', // (only for email sharing)
  username: 'custom twitter handle', // (only for twitter sharing)
};
```
#### Sticky Share Buttons
```js
import { StickyShareButtonsConfig } from 'sharethis-angular';

const stickyShareButtonsConfig: StickyShareButtonsConfig={
  alignment: 'left', // alignment of buttons (left, right)
  color: 'social', // set the color of buttons (social, white)
  enabled: true, // show/hide buttons (true, false)
  font_size: 16, // font size for the buttons
  hide_desktop: false, // hide buttons on desktop (true, false)
  labels: 'counts', // button labels (cta, counts, null)
  language: 'en', // which language to use (see LANGUAGES)
  min_count: 0, // hide react counts less than min_count (INTEGER)
  networks: [ // which networks to include (see SHARING NETWORKS)
  'linkedin',
  'facebook',
  'twitter',
  'pinterest',
  'email'
  ],
  padding: 12, // padding within buttons (INTEGER)
  radius: 4, // the corner radius on each button (INTEGER)
  show_total: true, // show/hide the total share count (true, false)
  show_mobile: true, // show/hide the buttons on mobile (true, false)
  show_toggle: true, // show/hide the toggle buttons (true, false)
  size: 48, // the size of each button (INTEGER)
  top: 160, // offset in pixels from the top of the page
  // OPTIONAL PARAMETERS
  url: 'https://www.sharethis.com', // (defaults to current url)
  image: 'https://bit.ly/2CMhCMC', // (defaults to og:image or twitter:image)
  description: 'custom text', // (defaults to og:description or twitter:description)
  title: 'custom title', // (defaults to og:title or twitter:title)
  message: 'custom email text', // (only for email sharing)
  subject: 'custom email subject', // (only for email sharing)
  username: 'custom twitter handle' // (only for twitter sharing)
};
```

#### Inline Follow Buttons
```js
import { InlineFollowButtonsConfig } from 'sharethis-angular';

const inlineFollowButtonsConfig: InlineFollowButtonsConfig = {
  action: 'Follow us:', // call to action (STRING)
  action_enabled: true, // show/hide call to action (true, false)
  action_pos: 'bottom', // position of call to action (left, top, right)
  alignment: 'center', // alignment of buttons (left, center, right)
  color: 'white', // set the color of buttons (social, white)
  enabled: true, // show/hide buttons (true, false)
  networks: [ // which networks to include (see FOLLOW NETWORKS)
  'twitter',
  'facebook',
  'instagram',
  'youtube'
  ],
  padding: 8, // padding within buttons (INTEGER)
  profiles: { // social profile links for buttons
  twitter: 'sharethis',
  facebook: 'sharethis',
  instagram: 'sharethis',
  youtube: '/channel/UCbM93niCmdc2RD9RZbLMP6A?view_as=subscriber'
  },
  radius: 9, // the corner radius on each button (INTEGER)
  size: 32, // the size of each button (INTEGER)
  spacing: 8 // the spacing between buttons (INTEGER)
};
```

#### Inline Reaction Buttons
```js
import { InlineReactionButtonsConfig } from 'sharethis-angular';

const inlineReactionButtonsConfig: InlineReactionButtonsConfig = {
  alignment: 'center', // alignment of buttons (left, center, right)
  enabled: true, // show/hide buttons (true, false)
  language: 'en', // which language to use (see LANGUAGES)
  min_count: 0, // hide react counts less than min_count (INTEGER)
  padding: 12, // padding within buttons (INTEGER)
  reactions: [ // which reactions to include (see REACTIONS)
  'slight_smile',
  'heart_eyes',
  'laughing',
  'astonished',
  'sob',
  'rage'
  ],
  size: 48, // the size of each button (INTEGER)
  spacing: 8, // the spacing between buttons (INTEGER)
  radius: 0, // the roundness of the buttons (INTEGER)
  show_total:true, // show/hide total number of each reaction (INTEGER)
  // OPTIONAL PARAMETERS
  url: 'https://www.sharethis.com' // (defaults to current url)
};
```

## License
MIT License

Copyright (c) 2022 ShareThis Inc

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
Footer
