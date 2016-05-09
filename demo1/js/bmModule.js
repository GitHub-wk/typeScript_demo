"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var baseModule_1 = require('./baseModule');
var bmModule = (function (_super) {
    __extends(bmModule, _super);
    function bmModule(opts) {
        _super.call(this, opts);
    }
    bmModule.prototype.creatView = function () {
        this.addView('bm_wk', 20);
        this.addView('bm_lsw', 24);
        this.addView('bm_ss', 23);
        this.addView('bm_xr', 24);
    };
    return bmModule;
}(baseModule_1.baseModule));
exports.bmModule = bmModule;
