import { Component, Input, ViewChild, } from '@angular/core';
import load from '../load';
import * as i0 from "@angular/core";
const _c0 = ["buttons"];
export class StickyShareButtonsComponent {
    constructor(rd) {
        this.rd = rd;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        load({
            config: this.config,
            buttons: this.buttons.nativeElement,
        }, 'sticky-share-buttons');
    }
}
StickyShareButtonsComponent.ɵfac = function StickyShareButtonsComponent_Factory(t) { return new (t || StickyShareButtonsComponent)(i0.ɵɵdirectiveInject(i0.Renderer2)); };
StickyShareButtonsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: StickyShareButtonsComponent, selectors: [["lib-sticky-share-buttons"]], viewQuery: function StickyShareButtonsComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.buttons = _t.first);
    } }, inputs: { config: "config" }, decls: 3, vars: 0, consts: [["buttons", ""]], template: function StickyShareButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", null, 0);
        i0.ɵɵtext(2, "\u00A0");
        i0.ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StickyShareButtonsComponent, [{
        type: Component,
        args: [{
                selector: 'lib-sticky-share-buttons',
                template: '<div #buttons>&nbsp;</div>',
            }]
    }], function () { return [{ type: i0.Renderer2 }]; }, { config: [{
            type: Input
        }], buttons: [{
            type: ViewChild,
            args: ['buttons']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpY2t5LXNoYXJlLWJ1dHRvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9sdWNhc211bGxlci9Eb2N1bWVudHMvR2l0SHViL3NoYXJldGhpcy1hbmd1bGFyL3Byb2plY3RzL3NoYXJldGhpcy1hbmd1bGFyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zdGlja3ktc2hhcmUtYnV0dG9ucy9zdGlja3ktc2hhcmUtYnV0dG9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBR0wsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sSUFBSSxNQUFNLFNBQVMsQ0FBQzs7O0FBTzNCLE1BQU0sT0FBTywyQkFBMkI7SUFPdEMsWUFBb0IsRUFBYTtRQUFiLE9BQUUsR0FBRixFQUFFLENBQVc7SUFBRyxDQUFDO0lBRXJDLFFBQVEsS0FBVSxDQUFDO0lBRW5CLGVBQWU7UUFDYixJQUFJLENBQ0Y7WUFDRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYTtTQUNwQyxFQUNELHNCQUFzQixDQUN2QixDQUFDO0lBQ0osQ0FBQzs7c0dBbkJVLDJCQUEyQjtnRUFBM0IsMkJBQTJCOzs7Ozs7UUFGM0Isb0NBQWM7UUFBQSxzQkFBTTtRQUFBLGlCQUFNOztrREFFMUIsMkJBQTJCO2NBSnZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUUsNEJBQTRCO2FBQ3ZDOzREQUdDLE1BQU07a0JBREwsS0FBSztZQUlOLE9BQU87a0JBRE4sU0FBUzttQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgbG9hZCBmcm9tICcuLi9sb2FkJztcbmltcG9ydCB7IFN0aWNreVNoYXJlQnV0dG9uc0NvbmZpZyB9IGZyb20gJy4uL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXN0aWNreS1zaGFyZS1idXR0b25zJyxcbiAgdGVtcGxhdGU6ICc8ZGl2ICNidXR0b25zPiZuYnNwOzwvZGl2PicsXG59KVxuZXhwb3J0IGNsYXNzIFN0aWNreVNoYXJlQnV0dG9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGNvbmZpZzogU3RpY2t5U2hhcmVCdXR0b25zQ29uZmlnO1xuXG4gIEBWaWV3Q2hpbGQoJ2J1dHRvbnMnKVxuICBidXR0b25zOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmQ6IFJlbmRlcmVyMikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGxvYWQoXG4gICAgICB7XG4gICAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgICAgIGJ1dHRvbnM6IHRoaXMuYnV0dG9ucy5uYXRpdmVFbGVtZW50LFxuICAgICAgfSxcbiAgICAgICdzdGlja3ktc2hhcmUtYnV0dG9ucydcbiAgICApO1xuICB9XG59XG4iXX0=