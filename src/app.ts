import {GridOptions} from './resources/elements/grid'

export class App {
    gridData: any;
    gridOptions: GridOptions;

    gridDataJson: string;
    gridOptionJson: string;

    constructor() {
        this.setup();
    }

    setup() {
        this.gridData = [
            { id: 1, make: "Audi", model: "A6 Quattro" },
            { id: 2, make: "BMW", model: "535i" },
            { id: 3, make: "Mercedes", model: "E350" },
            { id: 4, make: "Tesla", model: "Model S P90D" },
            { id: 5, make: "Audi", model: "RS6" }
        ];

        this.gridOptions = {
            columns: [
                { name: "make", display: "Make" },
                { name: "model", display: "Model" }
            ],
            pagerEnabled: false,
            pageSize: 0
        };

        this.gridDataJson = JSON.stringify(this.gridData, null, "   ");
        this.gridOptionJson = JSON.stringify(this.gridOptions, null, "   ");

    }

    apply() {
        this.gridData = JSON.parse(this.gridDataJson);
        this.gridOptions = JSON.parse(this.gridOptionJson);
    }
}
