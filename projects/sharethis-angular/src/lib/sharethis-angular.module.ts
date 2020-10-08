import { NgModule } from '@angular/core';
import { StickyShareButtonsComponent } from './sticky-share-buttons/sticky-share-buttons.component';
import { InlineShareButtonsComponent } from './inline-share-buttons/inline-share-buttons.component';
import { InlineFollowButtonsComponent } from './inline-follow-buttons/inline-follow-buttons.component';
import { InlineReactionButtonsComponent } from './inline-reaction-buttons/inline-reaction-buttons.component';

@NgModule({
  declarations: [
    StickyShareButtonsComponent,
    InlineShareButtonsComponent,
    InlineFollowButtonsComponent,
    InlineReactionButtonsComponent,
  ],
  imports: [],
  exports: [
    StickyShareButtonsComponent,
    InlineShareButtonsComponent,
    InlineFollowButtonsComponent,
    InlineReactionButtonsComponent,
  ],
})
export class SharethisAngularModule {}
