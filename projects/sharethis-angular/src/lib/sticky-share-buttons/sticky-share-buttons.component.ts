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

const DEFAULT_CONFIG: Partial<StickyShareButtonsConfig> = {
  alignment: 'left',
  color: 'social',
  enabled: true,
  font_size: 16,
  hide_desktop: false,
  labels: 'counts',
  language: 'en',
  min_count: 0,
  padding: 12,
  radius: 4,
  show_total: true,
  show_mobile: true,
  show_toggle: true,
  size: 48,
  top: 160,
};

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
        config: { ...DEFAULT_CONFIG, ...this.config },
        buttons: this.buttons.nativeElement,
      },
      'sticky-share-buttons'
    );
  }
}
