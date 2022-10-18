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

const DEFAULT_CONFIG: Partial<InlineReactionButtonsConfig> = {
  alignment: 'center',
  enabled: true,
  language: 'en',
  min_count: 0,
  padding: 12,
  size: 40,
  spacing: 8,
};

@Component({
  selector: 'st-inline-reaction-buttons',
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
        config: { ...DEFAULT_CONFIG, ...this.config },
        buttons: this.buttons.nativeElement,
      },
      'inline-reaction-buttons'
    );
  }
}
