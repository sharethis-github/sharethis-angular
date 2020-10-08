import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import load from '../load';
import { InlineReactionButtonsConfig } from '../types';

@Component({
  selector: 'lib-inline-reaction-buttons',
  template: '<div #buttons>&nbsp;</div>',
})
export class InlineReactionButtonsComponent implements OnInit {
  @Input()
  config: InlineReactionButtonsConfig;

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
      'inline-reaction-buttons'
    );
  }
}
