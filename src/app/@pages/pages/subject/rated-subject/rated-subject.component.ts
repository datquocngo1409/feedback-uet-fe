import {Component, OnInit, ViewChild} from '@angular/core';
import {SubjectService} from '../../../../services/subject/subject.service';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {MatCalendar} from '@angular/material/datepicker';
import {Moment} from 'moment';
import {ISubject} from '../data/subject';
import {API} from '../../../../services/apis-call/api.service';

@Component({
    selector: 'ms-rated-subject',
    templateUrl: './rated-subject.component.html',
    styleUrls: ['./rated-subject.component.scss']
})
export class RatedSubjectComponent implements OnInit {

    @ViewChild('calendar') calendar: MatCalendar<Moment>;

    public subjects;
    public subjectsDto: ISubject[];
    selectedDate: Moment;
    student;
    ratings;
    subjectWhichStudentRatedIds = [];
    ratedSubjects = [];

    constructor(private subjectService: SubjectService, private router: Router, private translate: TranslateService, private api: API) {
    }

    ngOnInit(): void {
        this.subjectService.getList().subscribe(data => {
            this.student = JSON.parse(localStorage.getItem('student'));
            this.subjects = data;
            this.api.getRatingSubject().subscribe(rating => {
                this.ratings = rating;
                for (const r of this.ratings) {
                    if (r.studentId === this.student.id) {
                        this.subjectWhichStudentRatedIds.push(r.subjectId);
                    }
                }
                for (const subject of this.subjects) {
                    if (this.subjectWhichStudentRatedIds.indexOf(subject.id) >= 0) {
                        this.ratedSubjects.push(subject);
                    }
                }
            });
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
