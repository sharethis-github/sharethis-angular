import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import load from '../load';
import { InlineFollowButtonsConfig } from '../types';

const DEFAULT_CONFIG: Partial<InlineFollowButtonsConfig> = {
  action: 'Follow us',
  action_enabled: true,
  action_pos: 'center',
  alignment: 'center',
  color: 'social',
  enabled: true,
  padding: 12,
  radius: 4,
  size: 40,
  spacing: 8,
};

@Component({
  selector: 'st-inline-follow-buttons',
  template: '<div #buttons>&nbsp;</div>',
})
export class InlineFollowButtonsComponent implements OnInit {
  @Input()
  config: InlineFollowButtonsConfig;

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
      'inline-follow-buttons'
    );
  }
}
