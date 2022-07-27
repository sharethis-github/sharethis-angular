import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import load from '../load';
import { StickyShareButtonsConfig } from '../types';

@Component({
  selector: 'st-sticky-share-buttons',
  template: '<div #buttons>&nbsp;</div>',
})
export class StickyShareButtonsComponent implements OnInit {
  @Input()
  config: StickyShareButtonsConfig;

  @ViewChild('buttons')
  buttons: ElementRef;

  constructor(private rd: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    load(
      {
        config: this.config,
        buttons: this.buttons.nativeElement,
      },
      'sticky-share-buttons'
    );
  }
}
