import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { InlineFollowButtonsConfig } from '../types';
import * as i0 from "@angular/core";
export declare class InlineFollowButtonsComponent implements OnInit {
    private rd;
    config: InlineFollowButtonsConfig;
    buttons: ElementRef;
    constructor(rd: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<InlineFollowButtonsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<InlineFollowButtonsComponent, "lib-inline-follow-buttons", never, { "config": "config"; }, {}, never, never>;
}
//# sourceMappingURL=inline-follow-buttons.component.d.ts.map