import {Component, OnInit} from '@angular/core';
import {SubjectService} from '../../../../services/subject/subject.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DialogRateComponent} from '../dialog/dialog-rate/dialog-rate.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'ms-detail-subject',
    templateUrl: './detail-subject.component.html',
    styleUrls: ['./detail-subject.component.scss']
})
export class DetailSubjectComponent implements OnInit {

    subject;
    showDetail;
    weekNumber;
    showComment;
    comments;
    dialogRef;

    constructor(
        private subjectService: SubjectService,
        private route: ActivatedRoute,
        private dialog: MatDialog,
        private translate: TranslateService) {
    }

    ngOnInit(): void {
        this.showDetail = true;
        this.showComment = false;
        this.weekNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        this.comments = [{id: 1, showRep: false, rep: false}, {id: 2, showRep: false, rep: false}];
        const id = +this.route.snapshot.paramMap.get('id');
        this.subjectService.getById(id).subscribe(subject => {
            this.subject = subject;
        });
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

    openDialog() {
        this.dialogRef = this.dialog.open(DialogRateComponent, {
            width: '1000px',
            height: '450px',
            data: {
                subject: this.subject
            }
        });
    }
}
