import { NgModule } from '@angular/core';
import { StickyShareButtonsComponent } from './sticky-share-buttons/sticky-share-buttons.component';
import { InlineShareButtonsComponent } from './inline-share-buttons/inline-share-buttons.component';
// import { InlineShareButtonsComponent } from './inline-share-buttons/inline-share-buttons.component';
// import { InlineShareButtonsComponent } from './inline-share-buttons/inline-share-buttons.component';

@NgModule({
  declarations: [StickyShareButtonsComponent, InlineShareButtonsComponent],
  imports: [],
  exports: [StickyShareButtonsComponent, InlineShareButtonsComponent],
})
export class SharethisAngularModule {}
