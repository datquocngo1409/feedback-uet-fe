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
    public MENUITEMS = [
        {
            name: 'UET Rating',
            type: 'sub',
            class: 'group-title',
            icon: '',
            children: [
                {state: 'account', name: 'NAVBAR.Account', type: 'link'},
                {state: 'setting', name: 'NAVBAR.Setting', type: 'link'}
            ]
        },
        {
            name: 'NAVBAR.Subject',
            type: 'sub',
            class: 'group-title',
            icon: '',
            children: [
                {state: 'subject/list', name: 'NAVBAR.Subject', type: 'link'},
                {state: 'subject/your', name: 'NAVBAR.YourSubject', type: 'link'},
                {state: 'subject/other', name: 'NAVBAR.OtherSubject', type: 'link'},
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
                {state: 'teacher/your', name: 'NAVBAR.YourTeacher', type: 'link'},
                {state: 'teacher/other', name: 'NAVBAR.OtherTeacher', type: 'link'},
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
        {
            name: 'NAVBAR.Admin',
            type: 'sub',
            class: 'group-title',
            icon: '',
            children: [
                {state: 'admin/subject', name: 'NAVBAR.Subject', type: 'link'},
                {state: 'admin/teacher', name: 'NAVBAR.Teacher', type: 'link'},
                {state: 'admin/student', name: 'NAVBAR.Student', type: 'link'},
            ]
        }
    ];

    constructor(private translate: TranslateService) {
    }

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
