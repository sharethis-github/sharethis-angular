import { Component } from '@angular/core';

import {
  StickyShareButtonsConfig,
  InlineShareButtonsConfig,
  InlineFollowButtonsConfig,
  InlineReactionButtonsConfig,
} from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  stickyButtonsConfig = StickyShareButtonsConfig;
  inlineShareButtonsConfig = InlineShareButtonsConfig;
  inlineFollowButtonsConfig = InlineFollowButtonsConfig;
  inlineReactionButtonsConfig = InlineReactionButtonsConfig;
}
