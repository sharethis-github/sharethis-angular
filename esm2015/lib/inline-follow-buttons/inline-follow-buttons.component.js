import { Component, Input, ViewChild, } from '@angular/core';
import load from '../load';
import * as i0 from "@angular/core";
const _c0 = ["buttons"];
export class InlineFollowButtonsComponent {
    constructor(rd) {
        this.rd = rd;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        load({
            config: this.config,
            buttons: this.buttons.nativeElement,
        }, 'inline-follow-buttons');
    }
}
InlineFollowButtonsComponent.ɵfac = function InlineFollowButtonsComponent_Factory(t) { return new (t || InlineFollowButtonsComponent)(i0.ɵɵdirectiveInject(i0.Renderer2)); };
InlineFollowButtonsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: InlineFollowButtonsComponent, selectors: [["lib-inline-follow-buttons"]], viewQuery: function InlineFollowButtonsComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.buttons = _t.first);
    } }, inputs: { config: "config" }, decls: 3, vars: 0, consts: [["buttons", ""]], template: function InlineFollowButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", null, 0);
        i0.ɵɵtext(2, "\u00A0");
        i0.ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InlineFollowButtonsComponent, [{
        type: Component,
        args: [{
                selector: 'lib-inline-follow-buttons',
                template: '<div #buttons>&nbsp;</div>',
            }]
    }], function () { return [{ type: i0.Renderer2 }]; }, { config: [{
            type: Input
        }], buttons: [{
            type: ViewChild,
            args: ['buttons']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLWZvbGxvdy1idXR0b25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbHVjYXNtdWxsZXIvRG9jdW1lbnRzL0dpdEh1Yi9zaGFyZXRoaXMtYW5ndWxhci9wcm9qZWN0cy9zaGFyZXRoaXMtYW5ndWxhci9zcmMvIiwic291cmNlcyI6WyJsaWIvaW5saW5lLWZvbGxvdy1idXR0b25zL2lubGluZS1mb2xsb3ctYnV0dG9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBR0wsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sSUFBSSxNQUFNLFNBQVMsQ0FBQzs7O0FBTzNCLE1BQU0sT0FBTyw0QkFBNEI7SUFPdkMsWUFBb0IsRUFBYTtRQUFiLE9BQUUsR0FBRixFQUFFLENBQVc7SUFBRyxDQUFDO0lBRXJDLFFBQVEsS0FBVSxDQUFDO0lBRW5CLGVBQWU7UUFDYixJQUFJLENBQ0Y7WUFDRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYTtTQUNwQyxFQUNELHVCQUF1QixDQUN4QixDQUFDO0lBQ0osQ0FBQzs7d0dBbkJVLDRCQUE0QjtpRUFBNUIsNEJBQTRCOzs7Ozs7UUFGNUIsb0NBQWM7UUFBQSxzQkFBTTtRQUFBLGlCQUFNOztrREFFMUIsNEJBQTRCO2NBSnhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxRQUFRLEVBQUUsNEJBQTRCO2FBQ3ZDOzREQUdDLE1BQU07a0JBREwsS0FBSztZQUlOLE9BQU87a0JBRE4sU0FBUzttQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgbG9hZCBmcm9tICcuLi9sb2FkJztcbmltcG9ydCB7IElubGluZUZvbGxvd0J1dHRvbnNDb25maWcgfSBmcm9tICcuLi90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1pbmxpbmUtZm9sbG93LWJ1dHRvbnMnLFxuICB0ZW1wbGF0ZTogJzxkaXYgI2J1dHRvbnM+Jm5ic3A7PC9kaXY+Jyxcbn0pXG5leHBvcnQgY2xhc3MgSW5saW5lRm9sbG93QnV0dG9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGNvbmZpZzogSW5saW5lRm9sbG93QnV0dG9uc0NvbmZpZztcblxuICBAVmlld0NoaWxkKCdidXR0b25zJylcbiAgYnV0dG9uczogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJkOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBsb2FkKFxuICAgICAge1xuICAgICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgICBidXR0b25zOiB0aGlzLmJ1dHRvbnMubmF0aXZlRWxlbWVudCxcbiAgICAgIH0sXG4gICAgICAnaW5saW5lLWZvbGxvdy1idXR0b25zJ1xuICAgICk7XG4gIH1cbn1cbiJdfQ==