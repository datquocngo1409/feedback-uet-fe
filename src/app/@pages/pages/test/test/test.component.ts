import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

export interface Group {
    group: string;
}

const DATA: (PeriodicElement | Group)[] = [
    {position: 1, name: 'A', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'A', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'A', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'A', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'B', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'B', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'B', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'C', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'C', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'C', weight: 20.1797, symbol: 'Ne'},
];

const ELEMENT_DATA = [];

@Component({
    selector: 'ms-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource();
    groupName = [];
    hiddenGroupName = [];

    isGroup(index, item): boolean {
        return item.group;
    }

    constructor() {
    }

    ngOnInit(): void {
        for (const data of DATA) {
            // @ts-ignore
            if (this.groupName.indexOf(data.name) < 0) {
                // @ts-ignore
                this.groupName.push(data.name);
            }
        }
        for (const groupName of this.groupName) {
            const group = {group: groupName, weight: 0}
            ELEMENT_DATA.push(group);
            for (const data of DATA) {
                // @ts-ignore
                if (data.name === groupName) {
                    ELEMENT_DATA.push(data);
                    // @ts-ignore
                    group.weight = group.weight + data.weight;
                }
            }
        }
        this.dataSource.data = ELEMENT_DATA;
    }

    groupHeaderClick(row) {
        if (this.hiddenGroupName.indexOf(row.group) < 0) {
            this.hiddenGroupName.push(row.group);
            this.dataSource.data = ELEMENT_DATA.filter(data => this.hiddenGroupName.indexOf(data.name) < 0);
        } else {
            this.removeElement(this.hiddenGroupName, row.group);
            this.dataSource.data = ELEMENT_DATA.filter(data => this.hiddenGroupName.indexOf(data.name) < 0);
        }
    }

    removeElement(array, elem) {
        const index = array.indexOf(elem);
        if (index > -1) {
            array.splice(index, 1);
        }
    }
}
