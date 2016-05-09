import {creatView} from './baseModule'
export class appComposite {
    private modules;
    constructor() {
        this.modules = [];
    }
    add(module: creatView) {
        this.modules.push(module);
    }
    initComposite() {
        for (let i: number = 0; i < this.modules.length; i++) {
            this.modules[i].creatView();
        }
    }
}