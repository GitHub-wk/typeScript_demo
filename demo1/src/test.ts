import {hyModule} from './hyModule'
import {bmModule} from './bmModule'
import {appComposite} from './appComposite'
let opts = {
    app: {
        config: function (name, opt) {
            console.log(name);
            console.log(opt);
        }
    }
}
let modules: appComposite = new appComposite();
modules.add(new hyModule(opts));
modules.add(new bmModule(opts));
modules.initComposite();