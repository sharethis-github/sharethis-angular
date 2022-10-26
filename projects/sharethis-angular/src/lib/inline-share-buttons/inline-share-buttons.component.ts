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

const DEFAULT_CONFIG: Partial<InlineShareButtonsConfig> = {
  alignment: 'center',
  color: 'social',
  enabled: true,
  font_size: 16,
  labels: 'cta',
  language: 'en',
  padding: 12,
  radius: 4,
  size: 40,
  show_total: true,
};

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
        config: { ...DEFAULT_CONFIG, ...this.config },
        buttons: this.buttons.nativeElement,
      },
      'inline-share-buttons'
    );
  }
}
