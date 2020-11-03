import {Component, OnInit, ViewChild} from '@angular/core';
import {SubjectService} from '../../../../services/subject/subject.service';
import {ISubject} from '../data/subject';
import {MatCalendar} from '@angular/material/datepicker';
import {Moment} from 'moment';
import {Router} from '@angular/router';

@Component({
    selector: 'ms-list-subject',
    templateUrl: './list-subject.component.html',
    styleUrls: ['./list-subject.component.scss']
})
export class ListSubjectComponent implements OnInit {

    @ViewChild('calendar') calendar: MatCalendar<Moment>;

    public subjects;
    public subjectsDto: ISubject[];
    selectedDate: Moment;

    constructor(private subjectService: SubjectService, private router: Router) {
    }

    ngOnInit(): void {
        this.subjectService.getList().subscribe(data => {
            this.subjects = data;
        });
    }

    calculateWeek(startDate) {
        if (startDate !== null) {
            const data = startDate.split('/');
            const startDateDate = new Date();
            startDateDate.setDate(data[0]);
            startDateDate.setMonth(data[1] - 1);
            startDateDate.setFullYear(data[2]);
            const now = new Date();
            const seconds = (now.getTime() - startDateDate.getTime()) / 1000;
            return Math.floor(seconds / (60 * 60 * 24 * 7));
        }
    }

    viewDetail(id: any) {
        this.router.navigate(['/subject/' + id]);
    }
}
