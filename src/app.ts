import {GridOptions} from './resources/elements/grid'

export class App{
    gridData: any;
    gridOptions: GridOptions;

    gridDataJson: string;
    gridOptionJson: string;

    constructor(){
    }

    apply(){
        this.gridData = JSON.parse(this.gridDataJson);
        this.gridOptions = JSON.parse(this.gridOptionJson);
    }
}
