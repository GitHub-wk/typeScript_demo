"use strict";
var appComposite = (function () {
    function appComposite() {
        this.modules = [];
    }
    appComposite.prototype.add = function (module) {
        this.modules.push(module);
    };
    appComposite.prototype.initComposite = function () {
        for (var i = 0; i < this.modules.length; i++) {
            this.modules[i].creatView();
        }
    };
    return appComposite;
}());
exports.appComposite = appComposite;
