import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { InlineReactionButtonsConfig } from '../types';
import * as i0 from "@angular/core";
export declare class InlineReactionButtonsComponent implements OnInit {
    private rd;
    config: InlineReactionButtonsConfig;
    buttons: ElementRef;
    constructor(rd: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<InlineReactionButtonsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<InlineReactionButtonsComponent, "lib-inline-reaction-buttons", never, { "config": "config"; }, {}, never, never>;
}
//# sourceMappingURL=inline-reaction-buttons.component.d.ts.map