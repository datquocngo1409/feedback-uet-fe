import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

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
    pushedAdmin = false;
    public MENUITEMS = [
        {
            name: 'UET Rating',
            type: 'sub',
            class: 'group-title',
            icon: '',
            children: [
                {state: '', name: 'NAVBAR.Home', type: 'link'},
                // {state: 'core/account', name: 'NAVBAR.Account', type: 'link'},
                // {state: 'core/setting', name: 'NAVBAR.Setting', type: 'link'}
            ]
        },
        {
            name: 'NAVBAR.Subject',
            type: 'sub',
            class: 'group-title',
            icon: '',
            children: [
                {state: 'subject/list', name: 'NAVBAR.Subject', type: 'link'},
                {state: 'subject/rated', name: 'NAVBAR.RatedSubject', type: 'link'},
                {state: 'subject/not-rated', name: 'NAVBAR.NotRatedSubject', type: 'link'},
            ]
        },
        {
            name: 'NAVBAR.Teacher',
            type: 'sub',
            class: 'group-title',
            icon: '',
            children: [
                {state: 'teacher/list', name: 'NAVBAR.Teacher', type: 'link'},
                {state: 'teacher/rated', name: 'NAVBAR.RatedTeacher', type: 'link'},
                {state: 'teacher/not-rated', name: 'NAVBAR.NotRatedTeacher', type: 'link'},
            ]
        },
        {
            name: 'NAVBAR.Statistical',
            type: 'sub',
            class: 'group-title',
            icon: '',
            children: [
                {state: 'statistical/subject', name: 'NAVBAR.Subject', type: 'link'},
                {state: 'statistical/teacher', name: 'NAVBAR.Teacher', type: 'link'},
            ]
        },
    ];

    constructor() {
        if (localStorage.getItem('role') === 'ADMIN') {
            this.MENUITEMS.push({
                name: 'NAVBAR.Admin',
                type: 'sub',
                class: 'group-title',
                icon: '',
                children: [
                    {state: 'admin/subject', name: 'NAVBAR.Subject', type: 'link'},
                    {state: 'admin/teacher', name: 'NAVBAR.Teacher', type: 'link'},
                    {state: 'admin/student', name: 'NAVBAR.Student', type: 'link'},
                ]
            });
        }
    }

    getAll() {
        return this.MENUITEMS;
    }

    add(menu: any) {
        this.MENUITEMS.push(menu);
    }

    contain(menu) {
        for (const m of this.MENUITEMS) {
            if (m === menu) {
                return true;
            }
        }
        return false;
    }

    length() {
        return this.MENUITEMS.length;
    }
}
