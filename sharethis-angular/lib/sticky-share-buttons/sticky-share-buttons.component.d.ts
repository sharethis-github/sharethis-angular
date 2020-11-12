import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { StickyShareButtonsConfig } from '../types';
import * as i0 from "@angular/core";
export declare class StickyShareButtonsComponent implements OnInit {
    private rd;
    config: StickyShareButtonsConfig;
    buttons: ElementRef;
    constructor(rd: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<StickyShareButtonsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<StickyShareButtonsComponent, "lib-sticky-share-buttons", never, { "config": "config"; }, {}, never, never>;
}
//# sourceMappingURL=sticky-share-buttons.component.d.ts.map