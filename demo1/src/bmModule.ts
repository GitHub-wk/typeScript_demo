import {creatView, baseModule} from './baseModule'
export class bmModule extends baseModule implements creatView {
    constructor(opts: { app: any }) {
        super(opts);
    }
    creatView() {
        this.addView('bm_wk', 20);
        this.addView('bm_lsw', 24);
        this.addView('bm_ss', 23);
        this.addView('bm_xr', 24);
    }
}