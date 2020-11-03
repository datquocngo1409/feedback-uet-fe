import {Component, OnInit} from '@angular/core';
import {SubjectService} from '../../../../services/subject/subject.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ms-detail-subject',
    templateUrl: './detail-subject.component.html',
    styleUrls: ['./detail-subject.component.scss']
})
export class DetailSubjectComponent implements OnInit {

    subject;
    showDetail;
    weekNumber;
    constructor(private subjectService: SubjectService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.showDetail = true;
        this.weekNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        const id = +this.route.snapshot.paramMap.get('id');
        this.subjectService.getById(id).subscribe(subject => {
            this.subject = subject;
        })
    }

    ratingComponentClick(clickObj: any): void {
        console.log(clickObj);
    }

    isShowDetail() {
        if (this.showDetail) {
            return 'left-content';
        } else {
            return 'full-content';
        }
    }

    getEndDate(startDate: any) {
        if (startDate !== null) {
            const data = startDate.split('/');
            const startDateDate = new Date();
            startDateDate.setDate(data[0]);
            startDateDate.setMonth(data[1] - 1);
            startDateDate.setFullYear(data[2]);
            const miliseconds = 15 * 7 * 24 * 3600 * 1000;
            const endDate = new Date(startDateDate.getTime() + miliseconds);
            return endDate.getDate() + '/' + endDate.getMonth() + 1 + '/' + endDate.getFullYear();
        } else {
            return null;
        }
    }

    isShowDetailButton() {
        if (this.showDetail) {
            return 'right-30';
        } else {
            return 'right';
        }
    }
}
