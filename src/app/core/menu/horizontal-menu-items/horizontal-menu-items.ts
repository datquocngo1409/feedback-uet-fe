import {Injectable} from '@angular/core';

export interface ChildrenItems {
    state: string;
    name: string;
    type?: string;
}

export interface Menu {
    state: string;
    name: string;
    type: string;
    icon: string;
    children?: ChildrenItems[];
}

@Injectable()
export class HorizontalMenuItems {
    MENUITEMS = [
        {
            name: 'Map',
            type: 'sub',
            class: 'group-title',
            icon: '',
            children: [
                {state: 'map/group', name: 'Group Map', type: 'link'},
                {state: 'map/vehicle', name: 'Vehicle Map', type: 'link'}
            ]
        }
    ];

    getAll() {
        return this.MENUITEMS;
    }

    add(menu: any) {
        this.MENUITEMS.push(menu);
    }

    length() {
        return this.MENUITEMS.length;
    }
}
