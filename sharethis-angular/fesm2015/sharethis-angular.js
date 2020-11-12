import { ɵɵdirectiveInject, Renderer2, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵsetClassMetadata, Component, Input, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

function load (component, product) {
    // load config
    let config = component.config || { enabled: true };
    config = JSON.parse(JSON.stringify(config));
    // load buttons
    const _onShareThisLoaded = window.onShareThisLoaded;
    let onload = () => {
        if (!onload.complete) {
            if (!config.id) {
                const id = 'sharethis-' + Date.now();
                config.id = id;
            }
            if (component.buttons) {
                component.buttons.id = config.id;
                window.__sharethis__.load(product, config);
            }
            if (_onShareThisLoaded) {
                _onShareThisLoaded();
            }
            onload.complete = true;
        }
    };
    window.onShareThisLoaded = onload;
    // load sharethis.js
    if (document.getElementById('sharethis-js')) {
        if (window.__sharethis__) {
            window.onShareThisLoaded();
        }
    }
    else {
        const script = document.createElement('script');
        script.setAttribute('id', 'sharethis-js');
        const params = {
            property: config.property || '',
            product: product,
            source: 'reactjs',
        };
        const query = Object.keys(params)
            .map((key) => key + '=' + params[key])
            .join('&');
        script.src = 'https://platform-api.sharethis.com/js/sharethis.js?' + query;
        script.async = true;
        document.body.appendChild(script);
    }
}

const _c0 = ["buttons"];
class StickyShareButtonsComponent {
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
StickyShareButtonsComponent.ɵfac = function StickyShareButtonsComponent_Factory(t) { return new (t || StickyShareButtonsComponent)(ɵɵdirectiveInject(Renderer2)); };
StickyShareButtonsComponent.ɵcmp = ɵɵdefineComponent({ type: StickyShareButtonsComponent, selectors: [["lib-sticky-share-buttons"]], viewQuery: function StickyShareButtonsComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.buttons = _t.first);
    } }, inputs: { config: "config" }, decls: 3, vars: 0, consts: [["buttons", ""]], template: function StickyShareButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", null, 0);
        ɵɵtext(2, "\u00A0");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(StickyShareButtonsComponent, [{
        type: Component,
        args: [{
                selector: 'lib-sticky-share-buttons',
                template: '<div #buttons>&nbsp;</div>',
            }]
    }], function () { return [{ type: Renderer2 }]; }, { config: [{
            type: Input
        }], buttons: [{
            type: ViewChild,
            args: ['buttons']
        }] }); })();

const _c0$1 = ["buttons"];
class InlineShareButtonsComponent {
    constructor(rd) {
        this.rd = rd;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        load({
            config: this.config,
            buttons: this.buttons.nativeElement,
        }, 'inline-share-buttons');
    }
}
InlineShareButtonsComponent.ɵfac = function InlineShareButtonsComponent_Factory(t) { return new (t || InlineShareButtonsComponent)(ɵɵdirectiveInject(Renderer2)); };
InlineShareButtonsComponent.ɵcmp = ɵɵdefineComponent({ type: InlineShareButtonsComponent, selectors: [["lib-inline-share-buttons"]], viewQuery: function InlineShareButtonsComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.buttons = _t.first);
    } }, inputs: { config: "config" }, decls: 3, vars: 0, consts: [["buttons", ""]], template: function InlineShareButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", null, 0);
        ɵɵtext(2, "\u00A0");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(InlineShareButtonsComponent, [{
        type: Component,
        args: [{
                selector: 'lib-inline-share-buttons',
                template: '<div #buttons>&nbsp;</div>',
            }]
    }], function () { return [{ type: Renderer2 }]; }, { config: [{
            type: Input
        }], buttons: [{
            type: ViewChild,
            args: ['buttons']
        }] }); })();

const _c0$2 = ["buttons"];
class InlineFollowButtonsComponent {
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
InlineFollowButtonsComponent.ɵfac = function InlineFollowButtonsComponent_Factory(t) { return new (t || InlineFollowButtonsComponent)(ɵɵdirectiveInject(Renderer2)); };
InlineFollowButtonsComponent.ɵcmp = ɵɵdefineComponent({ type: InlineFollowButtonsComponent, selectors: [["lib-inline-follow-buttons"]], viewQuery: function InlineFollowButtonsComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$2, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.buttons = _t.first);
    } }, inputs: { config: "config" }, decls: 3, vars: 0, consts: [["buttons", ""]], template: function InlineFollowButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", null, 0);
        ɵɵtext(2, "\u00A0");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(InlineFollowButtonsComponent, [{
        type: Component,
        args: [{
                selector: 'lib-inline-follow-buttons',
                template: '<div #buttons>&nbsp;</div>',
            }]
    }], function () { return [{ type: Renderer2 }]; }, { config: [{
            type: Input
        }], buttons: [{
            type: ViewChild,
            args: ['buttons']
        }] }); })();

const _c0$3 = ["buttons"];
class InlineReactionButtonsComponent {
    constructor(rd) {
        this.rd = rd;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        load({
            config: this.config,
            buttons: this.buttons.nativeElement,
        }, 'inline-reaction-buttons');
    }
}
InlineReactionButtonsComponent.ɵfac = function InlineReactionButtonsComponent_Factory(t) { return new (t || InlineReactionButtonsComponent)(ɵɵdirectiveInject(Renderer2)); };
InlineReactionButtonsComponent.ɵcmp = ɵɵdefineComponent({ type: InlineReactionButtonsComponent, selectors: [["lib-inline-reaction-buttons"]], viewQuery: function InlineReactionButtonsComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$3, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.buttons = _t.first);
    } }, inputs: { config: "config" }, decls: 3, vars: 0, consts: [["buttons", ""]], template: function InlineReactionButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", null, 0);
        ɵɵtext(2, "\u00A0");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(InlineReactionButtonsComponent, [{
        type: Component,
        args: [{
                selector: 'lib-inline-reaction-buttons',
                template: '<div #buttons>&nbsp;</div>',
            }]
    }], function () { return [{ type: Renderer2 }]; }, { config: [{
            type: Input
        }], buttons: [{
            type: ViewChild,
            args: ['buttons']
        }] }); })();

class SharethisAngularModule {
}
SharethisAngularModule.ɵmod = ɵɵdefineNgModule({ type: SharethisAngularModule });
SharethisAngularModule.ɵinj = ɵɵdefineInjector({ factory: function SharethisAngularModule_Factory(t) { return new (t || SharethisAngularModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SharethisAngularModule, { declarations: [StickyShareButtonsComponent,
        InlineShareButtonsComponent,
        InlineFollowButtonsComponent,
        InlineReactionButtonsComponent], exports: [StickyShareButtonsComponent,
        InlineShareButtonsComponent,
        InlineFollowButtonsComponent,
        InlineReactionButtonsComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SharethisAngularModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    StickyShareButtonsComponent,
                    InlineShareButtonsComponent,
                    InlineFollowButtonsComponent,
                    InlineReactionButtonsComponent,
                ],
                imports: [],
                exports: [
                    StickyShareButtonsComponent,
                    InlineShareButtonsComponent,
                    InlineFollowButtonsComponent,
                    InlineReactionButtonsComponent,
                ],
            }]
    }], null, null); })();

/*
 * Public API Surface of sharethis-angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { InlineFollowButtonsComponent, InlineReactionButtonsComponent, InlineShareButtonsComponent, SharethisAngularModule, StickyShareButtonsComponent };
//# sourceMappingURL=sharethis-angular.js.map
