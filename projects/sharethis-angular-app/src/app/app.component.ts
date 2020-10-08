import { Component } from '@angular/core';

import {
  StickyButtonsConfig,
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
  stickyButtonsConfig = StickyButtonsConfig;
  inlineShareButtonsConfig = InlineShareButtonsConfig;
  inlineFollowButtonsConfig = InlineFollowButtonsConfig;
  inlineReactionButtonsConfig = InlineReactionButtonsConfig;
}
