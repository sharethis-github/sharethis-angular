(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('sharethis-angular', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['sharethis-angular'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    function load (component, product) {
        // load config
        var config = component.config || { enabled: true };
        config = JSON.parse(JSON.stringify(config));
        // load buttons
        var _onShareThisLoaded = window.onShareThisLoaded;
        var onload = function () {
            if (!onload.complete) {
                if (!config.id) {
                    var id = 'sharethis-' + Date.now();
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
            var script = document.createElement('script');
            script.setAttribute('id', 'sharethis-js');
            var params_1 = {
                property: config.property || '',
                product: product,
                source: 'reactjs',
            };
            var query = Object.keys(params_1)
                .map(function (key) { return key + '=' + params_1[key]; })
                .join('&');
            script.src = 'https://platform-api.sharethis.com/js/sharethis.js?' + query;
            script.async = true;
            document.body.appendChild(script);
        }
    }

    var _c0 = ["buttons"];
    var StickyShareButtonsComponent = /** @class */ (function () {
        function StickyShareButtonsComponent(rd) {
            this.rd = rd;
        }
        StickyShareButtonsComponent.prototype.ngOnInit = function () { };
        StickyShareButtonsComponent.prototype.ngAfterViewInit = function () {
            load({
                config: this.config,
                buttons: this.buttons.nativeElement,
            }, 'sticky-share-buttons');
        };
        return StickyShareButtonsComponent;
    }());
    StickyShareButtonsComponent.ɵfac = function StickyShareButtonsComponent_Factory(t) { return new (t || StickyShareButtonsComponent)(i0.ɵɵdirectiveInject(i0.Renderer2)); };
    StickyShareButtonsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: StickyShareButtonsComponent, selectors: [["lib-sticky-share-buttons"]], viewQuery: function StickyShareButtonsComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.buttons = _t.first);
            }
        }, inputs: { config: "config" }, decls: 3, vars: 0, consts: [["buttons", ""]], template: function StickyShareButtonsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", null, 0);
                i0.ɵɵtext(2, "\u00A0");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(StickyShareButtonsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-sticky-share-buttons',
                        template: '<div #buttons>&nbsp;</div>',
                    }]
            }], function () { return [{ type: i0.Renderer2 }]; }, { config: [{
                    type: i0.Input
                }], buttons: [{
                    type: i0.ViewChild,
                    args: ['buttons']
                }] });
    })();

    var _c0$1 = ["buttons"];
    var InlineShareButtonsComponent = /** @class */ (function () {
        function InlineShareButtonsComponent(rd) {
            this.rd = rd;
        }
        InlineShareButtonsComponent.prototype.ngOnInit = function () { };
        InlineShareButtonsComponent.prototype.ngAfterViewInit = function () {
            load({
                config: this.config,
                buttons: this.buttons.nativeElement,
            }, 'inline-share-buttons');
        };
        return InlineShareButtonsComponent;
    }());
    InlineShareButtonsComponent.ɵfac = function InlineShareButtonsComponent_Factory(t) { return new (t || InlineShareButtonsComponent)(i0.ɵɵdirectiveInject(i0.Renderer2)); };
    InlineShareButtonsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: InlineShareButtonsComponent, selectors: [["lib-inline-share-buttons"]], viewQuery: function InlineShareButtonsComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$1, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.buttons = _t.first);
            }
        }, inputs: { config: "config" }, decls: 3, vars: 0, consts: [["buttons", ""]], template: function InlineShareButtonsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", null, 0);
                i0.ɵɵtext(2, "\u00A0");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(InlineShareButtonsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-inline-share-buttons',
                        template: '<div #buttons>&nbsp;</div>',
                    }]
            }], function () { return [{ type: i0.Renderer2 }]; }, { config: [{
                    type: i0.Input
                }], buttons: [{
                    type: i0.ViewChild,
                    args: ['buttons']
                }] });
    })();

    var _c0$2 = ["buttons"];
    var InlineFollowButtonsComponent = /** @class */ (function () {
        function InlineFollowButtonsComponent(rd) {
            this.rd = rd;
        }
        InlineFollowButtonsComponent.prototype.ngOnInit = function () { };
        InlineFollowButtonsComponent.prototype.ngAfterViewInit = function () {
            load({
                config: this.config,
                buttons: this.buttons.nativeElement,
            }, 'inline-follow-buttons');
        };
        return InlineFollowButtonsComponent;
    }());
    InlineFollowButtonsComponent.ɵfac = function InlineFollowButtonsComponent_Factory(t) { return new (t || InlineFollowButtonsComponent)(i0.ɵɵdirectiveInject(i0.Renderer2)); };
    InlineFollowButtonsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: InlineFollowButtonsComponent, selectors: [["lib-inline-follow-buttons"]], viewQuery: function InlineFollowButtonsComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$2, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.buttons = _t.first);
            }
        }, inputs: { config: "config" }, decls: 3, vars: 0, consts: [["buttons", ""]], template: function InlineFollowButtonsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", null, 0);
                i0.ɵɵtext(2, "\u00A0");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(InlineFollowButtonsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-inline-follow-buttons',
                        template: '<div #buttons>&nbsp;</div>',
                    }]
            }], function () { return [{ type: i0.Renderer2 }]; }, { config: [{
                    type: i0.Input
                }], buttons: [{
                    type: i0.ViewChild,
                    args: ['buttons']
                }] });
    })();

    var _c0$3 = ["buttons"];
    var InlineReactionButtonsComponent = /** @class */ (function () {
        function InlineReactionButtonsComponent(rd) {
            this.rd = rd;
        }
        InlineReactionButtonsComponent.prototype.ngOnInit = function () { };
        InlineReactionButtonsComponent.prototype.ngAfterViewInit = function () {
            load({
                config: this.config,
                buttons: this.buttons.nativeElement,
            }, 'inline-reaction-buttons');
        };
        return InlineReactionButtonsComponent;
    }());
    InlineReactionButtonsComponent.ɵfac = function InlineReactionButtonsComponent_Factory(t) { return new (t || InlineReactionButtonsComponent)(i0.ɵɵdirectiveInject(i0.Renderer2)); };
    InlineReactionButtonsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: InlineReactionButtonsComponent, selectors: [["lib-inline-reaction-buttons"]], viewQuery: function InlineReactionButtonsComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$3, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.buttons = _t.first);
            }
        }, inputs: { config: "config" }, decls: 3, vars: 0, consts: [["buttons", ""]], template: function InlineReactionButtonsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", null, 0);
                i0.ɵɵtext(2, "\u00A0");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(InlineReactionButtonsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-inline-reaction-buttons',
                        template: '<div #buttons>&nbsp;</div>',
                    }]
            }], function () { return [{ type: i0.Renderer2 }]; }, { config: [{
                    type: i0.Input
                }], buttons: [{
                    type: i0.ViewChild,
                    args: ['buttons']
                }] });
    })();

    var SharethisAngularModule = /** @class */ (function () {
        function SharethisAngularModule() {
        }
        return SharethisAngularModule;
    }());
    SharethisAngularModule.ɵmod = i0.ɵɵdefineNgModule({ type: SharethisAngularModule });
    SharethisAngularModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SharethisAngularModule_Factory(t) { return new (t || SharethisAngularModule)(); }, imports: [[]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharethisAngularModule, { declarations: [StickyShareButtonsComponent,
                InlineShareButtonsComponent,
                InlineFollowButtonsComponent,
                InlineReactionButtonsComponent], exports: [StickyShareButtonsComponent,
                InlineShareButtonsComponent,
                InlineFollowButtonsComponent,
                InlineReactionButtonsComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SharethisAngularModule, [{
                type: i0.NgModule,
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
            }], null, null);
    })();

    /*
     * Public API Surface of sharethis-angular
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.InlineFollowButtonsComponent = InlineFollowButtonsComponent;
    exports.InlineReactionButtonsComponent = InlineReactionButtonsComponent;
    exports.InlineShareButtonsComponent = InlineShareButtonsComponent;
    exports.SharethisAngularModule = SharethisAngularModule;
    exports.StickyShareButtonsComponent = StickyShareButtonsComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sharethis-angular.umd.js.map
