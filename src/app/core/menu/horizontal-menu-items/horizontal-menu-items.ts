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
            name: 'UET Rating',
            type: 'sub',
            class: 'group-title',
            icon: '',
            children: [
                {state: 'account', name: 'Account', type: 'link'},
                {state: 'setting', name: 'Setting', type: 'link'}
            ]
        },
        {
            name: 'Subject',
            type: 'sub',
            class: 'group-title',
            icon: '',
            children: [
                {state: 'subject', name: 'Subject', type: 'link'},
                {state: 'subject/your', name: 'Your Subject', type: 'link'},
                {state: 'subject/other', name: 'Other Subject', type: 'link'},
                {state: 'subject/rated', name: 'Rated Subject', type: 'link'},
                {state: 'subject/not-rated', name: 'Not Rated Subject', type: 'link'},
            ]
        },
        {
            name: 'Teacher',
            type: 'sub',
            class: 'group-title',
            icon: '',
            children: [
                {state: 'teacher', name: 'Teacher', type: 'link'},
                {state: 'teacher/your', name: 'Your Teacher', type: 'link'},
                {state: 'teacher/other', name: 'Other Teacher', type: 'link'},
                {state: 'teacher/rated', name: 'Rated Teacher', type: 'link'},
                {state: 'teacher/not-rated', name: 'Not Rated Teacher', type: 'link'},
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
