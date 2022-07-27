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
        config: this.config,
        buttons: this.buttons.nativeElement,
      },
      'inline-follow-buttons'
    );
  }
}
