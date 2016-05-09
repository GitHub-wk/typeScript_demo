"use strict";
var baseModule = (function () {
    function baseModule(opts) {
        this.opts = opts;
        this.opts = opts;
    }
    baseModule.prototype.addView = function (name, views) {
        this.opts.app.config(name, views);
    };
    return baseModule;
}());
exports.baseModule = baseModule;
