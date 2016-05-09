import {creatView, baseModule} from './baseModule'
export class hyModule extends baseModule implements creatView {
    constructor(opts: { app: any }) {
        super(opts);
    }
    creatView() {
        this.addView('hy_wk', 20);
        this.addView('hy_lsw', 24);
        this.addView('hy_ss', 23);
        this.addView('hy_xr', 24);
    }
}