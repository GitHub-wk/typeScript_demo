"use strict";
var hyModule_1 = require('./hyModule');
var bmModule_1 = require('./bmModule');
var appComposite_1 = require('./appComposite');
var opts = {
    app: {
        config: function (name, opt) {
            console.log(name);
            console.log(opt);
        }
    }
};
var modules = new appComposite_1.appComposite();
modules.add(new hyModule_1.hyModule(opts));
modules.add(new bmModule_1.bmModule(opts));
modules.initComposite();
