import { forwardRef, EventEmitter, Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, Pipe, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/** This allows support [(ngModel)] and ngControl. */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function BarRating_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵlistener("click", function BarRating_div_2_Template_div_click_0_listener($event) { const unit_r2 = ctx.$implicit; return unit_r2.click($event); })("mouseenter", function BarRating_div_2_Template_div_mouseenter_0_listener() { const unit_r2 = ctx.$implicit; return unit_r2.enter(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const unit_r2 = ctx.$implicit;
    ɵngcc0.ɵɵclassProp("br-fraction", unit_r2.fraction)("br-selected", unit_r2.selected)("br-active", unit_r2.active);
} }
function BarRating_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵpipe(2, "rateTitle");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind2(2, 1, ctx_r1.nextRate, ctx_r1.titles));
} }
const RATING_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => BarRating),
    multi: true
};
/** This allows control required validation. */
const RATING_VALUE_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => BarRating),
    multi: true,
};
class BarRating {
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.contexts = [];
        /** Maximal rating that can be given using this widget. */
        this.max = 5;
        /** A flag indicating if rating can be updated. */
        this.readOnly = false;
        /** Set the theme */
        this.theme = 'default';
        /** Show rating title */
        this.showText = false;
        /** Replace rate value with a title */
        this.titles = [];
        /** A flag indicating if rating is required for form validation. */
        this.required = false;
        /**
         * An event fired when a user is hovering over a given rating.
         * Event's payload equals to the rating being hovered over.
         */
        this.hover = new EventEmitter();
        /**
         * An event fired when a user stops hovering over a given rating.
         * Event's payload equals to the rating of the last item being hovered over.
         */
        this.leave = new EventEmitter();
        /**
         * An event fired when a user selects a new rating.
         * Event's payload equals to the newly selected rating.
         */
        this.rateChange = new EventEmitter(true);
        this.onChange = (_) => {
        };
        this.onTouched = () => {
        };
    }
    ngOnChanges(changes) {
        if (changes.rate) {
            this.update(this.rate);
        }
    }
    ngOnInit() {
        this.contexts = Array.from({ length: this.max }, (context, i) => ({
            selected: false,
            fraction: false,
            active: false,
            click: (e) => this.handleClick(e, i + 1),
            enter: () => this.handleEnter(i + 1)
        }));
        this.updateState(this.rate);
    }
    update(newRate, internalChange = true) {
        if (!this.readOnly && !this.disabled && this.rate !== newRate) {
            this.rate = newRate;
            this.rateChange.emit(this.rate);
        }
        if (internalChange) {
            this.onChange(this.rate);
            this.onTouched();
        }
        this.updateState(this.rate);
    }
    /** Reset rate value */
    reset() {
        this.leave.emit(this.nextRate);
        this.updateState(this.rate);
    }
    updateState(nextValue) {
        /** Set rate value as text */
        this.nextRate = nextValue - 1;
        /** Set the rating */
        this.contexts = Array.from({ length: this.max }, (context, index) => ({
            selected: index + 1 <= nextValue,
            fraction: (index + 1 === Math.round(nextValue) && nextValue % 1) >= 0.5,
            active: false,
            click: (e) => this.handleClick(e, index),
            enter: () => this.handleEnter(index)
        }));
    }
    handleClick(e, value) {
        /** (NOT TESTED) Remove 300ms click delay on touch devices */
        e.preventDefault();
        e.stopPropagation();
        this.update(value + 1);
    }
    handleEnter(index) {
        if (!this.disabled && !this.readOnly) {
            /** Add selected class for rating hover */
            this.contexts.map((context, i) => {
                context.active = i <= index;
                context.fraction = false;
                context.selected = false;
            });
            this.nextRate = index;
            this.hover.emit(index);
        }
    }
    /** This is the initial value set to the component */
    writeValue(value) {
        this.update(value, false);
        this.changeDetectorRef.markForCheck();
    }
    validate(c) {
        return (this.required && !c.value) ? { required: true } : null;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
BarRating.ɵfac = function BarRating_Factory(t) { return new (t || BarRating)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
BarRating.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BarRating, selectors: [["bar-rating"]], inputs: { max: "max", readOnly: "readOnly", theme: "theme", showText: "showText", titles: "titles", required: "required", rate: "rate" }, outputs: { hover: "hover", leave: "leave", rateChange: "rateChange" }, features: [ɵngcc0.ɵɵProvidersFeature([RATING_VALUE_ACCESSOR, RATING_VALUE_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 4, vars: 9, consts: [[1, "br-units", 3, "mouseleave"], ["class", "br-unit", 3, "br-fraction", "br-selected", "br-active", "click", "mouseenter", 4, "ngFor", "ngForOf"], ["class", "br-text", 4, "ngIf"], [1, "br-unit", 3, "click", "mouseenter"], [1, "br-text"]], template: function BarRating_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "div", 0);
        ɵngcc0.ɵɵlistener("mouseleave", function BarRating_Template_div_mouseleave_1_listener() { return ctx.reset(); });
        ɵngcc0.ɵɵtemplate(2, BarRating_div_2_Template, 1, 6, "div", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, BarRating_div_3_Template, 3, 4, "div", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("br br-", ctx.theme, "");
        ɵngcc0.ɵɵclassProp("br-readonly", ctx.readOnly)("br-disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.contexts);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showText);
    } }, directives: function () { return [ɵngcc1.NgForOf, ɵngcc1.NgIf]; }, pipes: function () { return [BarRatingPipe]; }, styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}.br[_ngcontent-%COMP%]{margin:15px 0;position:relative}.br-units[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap}.br-unit[_ngcontent-%COMP%]{-webkit-font-smoothing:antialiased;cursor:pointer;text-rendering:auto}.br-disabled[_ngcontent-%COMP%]   .br-unit[_ngcontent-%COMP%], .br-readonly[_ngcontent-%COMP%]   .br-unit[_ngcontent-%COMP%]{cursor:default}"], changeDetection: 0 });
BarRating.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
BarRating.propDecorators = {
    rate: [{ type: Input }],
    max: [{ type: Input }],
    readOnly: [{ type: Input }],
    theme: [{ type: Input }],
    showText: [{ type: Input }],
    titles: [{ type: Input }],
    required: [{ type: Input }],
    hover: [{ type: Output }],
    leave: [{ type: Output }],
    rateChange: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BarRating, [{
        type: Component,
        args: [{
                selector: 'bar-rating',
                template: "<div class=\"br br-{{theme}}\"\n     [class.br-readonly]=\"readOnly\"\n     [class.br-disabled]=\"disabled\">\n\n  <div class=\"br-units\" (mouseleave)=\"reset()\">\n\n    <div class=\"br-unit\" *ngFor=\"let unit of contexts\"\n         [class.br-fraction]=\"unit.fraction\"\n         [class.br-selected]=\"unit.selected\"\n         [class.br-active]=\"unit.active\"\n         (click)=\"unit.click($event)\"\n         (mouseenter)=\"unit.enter()\"></div>\n  </div>\n\n  <div *ngIf=\"showText\" class=\"br-text\">{{ nextRate | rateTitle: titles }}</div>\n</div>\n",
                providers: [RATING_VALUE_ACCESSOR, RATING_VALUE_VALIDATOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["*{box-sizing:border-box}.br{margin:15px 0;position:relative}.br-units{display:flex;flex-wrap:nowrap}.br-unit{-webkit-font-smoothing:antialiased;cursor:pointer;text-rendering:auto}.br-disabled .br-unit,.br-readonly .br-unit{cursor:default}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { max: [{
            type: Input
        }], readOnly: [{
            type: Input
        }], theme: [{
            type: Input
        }], showText: [{
            type: Input
        }], titles: [{
            type: Input
        }], required: [{
            type: Input
        }], hover: [{
            type: Output
        }], leave: [{
            type: Output
        }], rateChange: [{
            type: Output
        }], rate: [{
            type: Input
        }] }); })();

class BarRatingPipe {
    transform(value = 0, titles) {
        /** Initialize value with 0 in case of undefined */
        return titles[value] || value + 1;
    }
}
BarRatingPipe.ɵfac = function BarRatingPipe_Factory(t) { return new (t || BarRatingPipe)(); };
BarRatingPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "rateTitle", type: BarRatingPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BarRatingPipe, [{
        type: Pipe,
        args: [{
                name: 'rateTitle'
            }]
    }], null, null); })();

class BarRatingModule {
}
BarRatingModule.ɵfac = function BarRatingModule_Factory(t) { return new (t || BarRatingModule)(); };
BarRatingModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: BarRatingModule });
BarRatingModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(BarRatingModule, { declarations: function () { return [BarRating, BarRatingPipe]; }, imports: function () { return [CommonModule,
        FormsModule]; }, exports: function () { return [BarRating]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BarRatingModule, [{
        type: NgModule,
        args: [{
                declarations: [BarRating, BarRatingPipe],
                imports: [
                    CommonModule,
                    FormsModule
                ],
                exports: [BarRating]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { BarRating, BarRatingModule, BarRatingPipe as ɵa };

//# sourceMappingURL=ngx-bar-rating.js.map