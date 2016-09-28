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
    @bindable data: any;
    @bindable options: GridOptions;
    @bindable promise: any;
    pageData: any;
    pageNumbers: number[];
    currentPage: number;

    constructor(private element: Element) {
        this.currentPage = 1;
    }

    attached() {
        this.promise.then((result: any) => {
            this.data = result.content;
            this.pageData = this.getPageData();
            this.pageNumbers = [];
            for (var i = 1; i < this.getPageCount(); i++) {
                this.pageNumbers.push(i);
            }
        });
    }

    goto(pageNumber: number) {
        this.currentPage = pageNumber;
        this.pageData = this.getPageData();
    }

    next() {
        this.currentPage++;
        this.pageData = this.getPageData();
    }

    prev() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.pageData = this.getPageData();
        }
    }

    private getPageCount(): number{
        return Math.ceil(this.data.length / this.options.pageSize) + 1;
    }

    private getPageData(): any {
        var index = this.options.pageSize * (this.currentPage - 1);
        var elementCount = this.options.pageSize;
        if (index + elementCount > this.data.length) {
            elementCount = this.data.length - index;
        }
        return this.data.slice(index, index + elementCount);
    }
}