import { bindable } from 'aurelia-framework'

export class GridColumn {
    name: string;
    display: string;
    sort: boolean;
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
    @bindable promise: any;
    pageData: any;
    pageNumbers: number[];
    currentPage: number;
    showPager: boolean;

    constructor(private element: Element) {
        this.currentPage = 1;
    }

    attached() {
        this.promise.then((result: any) => {
            this.data = result.content;
            this.pageData = this.getPageData();
            if (this.data.length > this.options.pageSize) {
                this.showPager = true;
                this.pageNumbers = [];
                for (var i = 1; i < this.getPageCount(); i++) {
                    this.pageNumbers.push(i);
                }
            }
        });
    }

    goto(pageNumber: number) {
        this.currentPage = pageNumber;
        this.pageData = this.getPageData();
    }

    next() {
        if (this.currentPage + 1 < this.getPageCount()) {
            this.currentPage++;
            this.pageData = this.getPageData();
        }
    }

    prev() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.pageData = this.getPageData();
        }
    }

    sort(key: string) {
        this.data.sort((a: any, b: any): number => {
            var comparisonIndicator = 0;
            if (a[key] < b[key])
                comparisonIndicator = -1;
            else
                comparisonIndicator = 1;

            return comparisonIndicator;
        });

        this.pageData = this.getPageData();
    }

    private getPageCount(): number {
        return Math.ceil(this.data.length / this.options.pageSize) + 1;
    }

    private getPageData(): any {
        var index = this.options.pageSize * (this.currentPage - 1);
        var elementCount = this.options.pageSize;
        if (index + elementCount > this.data.length) {
            elementCount = this.data.length - index;
        }
        var result: any[] = this.data.slice(index, index + elementCount);
        for (var i = result.length; i < this.options.pageSize; i++) {
            result.push({});
        }
        return result;
    }
}