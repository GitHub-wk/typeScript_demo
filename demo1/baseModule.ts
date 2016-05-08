export class baseModule {
    constructor(protected opts: { app: any }) {
        this.opts = opts;
    }
    addView(name: string, views: {}) {
        this.opts.app.config(name,views);
    }
}
export interface creatView{
    creatView();
}
