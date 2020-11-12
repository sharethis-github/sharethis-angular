import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { InlineShareButtonsConfig } from '../types';
import * as i0 from "@angular/core";
export declare class InlineShareButtonsComponent implements OnInit {
    private rd;
    config: InlineShareButtonsConfig;
    buttons: ElementRef;
    constructor(rd: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<InlineShareButtonsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<InlineShareButtonsComponent, "lib-inline-share-buttons", never, { "config": "config"; }, {}, never, never>;
}
//# sourceMappingURL=inline-share-buttons.component.d.ts.map