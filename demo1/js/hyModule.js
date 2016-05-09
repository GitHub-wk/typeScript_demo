"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var baseModule_1 = require('./baseModule');
var hyModule = (function (_super) {
    __extends(hyModule, _super);
    function hyModule(opts) {
        _super.call(this, opts);
    }
    hyModule.prototype.creatView = function () {
        this.addView('hy_wk', 20);
        this.addView('hy_lsw', 24);
        this.addView('hy_ss', 23);
        this.addView('hy_xr', 24);
    };
    return hyModule;
}(baseModule_1.baseModule));
exports.hyModule = hyModule;
