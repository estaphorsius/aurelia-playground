import {GridOptions} from './resources/elements/grid';
import {HttpClient} from 'aurelia-http-client';

export class App {
    static inject() { return [HttpClient]; }
    gridData: any;
    gridOptions: GridOptions;

    constructor(private http: HttpClient) {
        this.setup();
    }

    fetch() {
        return this.http.get("src/cars.json");
    }

    rowSelect(data:any){
        alert(`You selected the ${data.make} ${data.model}. This car has ${data.horsepower}.`);
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
    }
}
