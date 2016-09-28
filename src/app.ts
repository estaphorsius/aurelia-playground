import {GridOptions} from './resources/elements/grid';
import {HttpClient} from 'aurelia-http-client';

export class App {
    static inject() { return [HttpClient]; }
    gridData: any;
    gridOptions: GridOptions;

    gridDataJson: string;
    gridOptionJson: string;

    constructor(private http: HttpClient) {
        this.setup();
    }

    fetch() {
        return this.http.get("src/cars.json");
    }

    setup() {
        this.gridOptions = {
            columns: [
                { name: "make", display: "Make", sort: true },
                { name: "model", display: "Model", sort: false },
                { name: "horsepower", display: "Horsepower", sort: false }
            ],
            pagerEnabled: false,
            pageSize: 10
        };

        this.gridDataJson = JSON.stringify(this.gridData, null, "   ");
        this.gridOptionJson = JSON.stringify(this.gridOptions, null, "   ");

    }

    apply() {
        this.gridData = JSON.parse(this.gridDataJson);
        this.gridOptions = JSON.parse(this.gridOptionJson);
    }
}
