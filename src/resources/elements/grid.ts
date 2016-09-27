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
    static inject() { return [Element]; }
    @bindable data: any[];
    @bindable options: GridOptions;

    constructor(private element: Element) {
    }

    attached() {
        //alert(JSON.stringify(this.element.tagName));
    }
}