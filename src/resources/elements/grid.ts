import { bindable } from 'aurelia-framework'

export class GridColumn {
    name: string;
    display: string;
}

export class GridOptions {
    columns: GridColumn[];
    pagerEnabled: boolean;
    pageSize: number;
}

export class Grid {
    @bindable data: any[];
    @bindable options: GridOptions;

    constructor() {
    }
}