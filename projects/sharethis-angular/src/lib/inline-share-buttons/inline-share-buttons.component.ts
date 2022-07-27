import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import load from '../load';
import { InlineShareButtonsConfig } from '../types';

@Component({
  selector: 'st-inline-share-buttons',
  template: '<div #buttons>&nbsp;</div>',
})
export class InlineShareButtonsComponent implements OnInit {
  @Input()
  config: InlineShareButtonsConfig;

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
      'inline-share-buttons'
    );
  }
}
