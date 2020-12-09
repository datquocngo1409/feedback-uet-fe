import {Component, OnInit} from '@angular/core';
import {SubjectService} from '../../../../services/subject/subject.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DialogRateComponent} from '../dialog/dialog-rate/dialog-rate.component';
import {TranslateService} from '@ngx-translate/core';
import {API} from '../../../../services/apis-call/api.service';

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
    commentAll;
    commentNotRepply = [];
    commentRepply = [];
    dialogRef;
    user;
    subjectId;

    constructor(
        private subjectService: SubjectService,
        private route: ActivatedRoute,
        private dialog: MatDialog,
        private translate: TranslateService,
        private api: API) {
    }

    ngOnInit(): void {
        this.showDetail = true;
        this.showComment = false;
        this.weekNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        this.getData();
    }

    getData() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.subjectService.getById(id).subscribe(subject => {
            this.subject = subject;
            this.commentAll = [];
            this.commentRepply = [];
            this.commentNotRepply = [];
            this.api.getCommentBySubjectId(id).subscribe(comments => {
                this.commentAll = comments;
                for (const comment of this.commentAll) {
                    comment.showRep = false;
                    comment.rep = false;
                    if (!comment.reply) {
                        this.commentNotRepply.push(comment);
                    } else {
                        this.commentRepply.push(comment);
                    }
                }
                this.user = JSON.parse(localStorage.getItem('student'));
                this.sortCommentByDate();
            })
        });
    }

    sortCommentByDate() {
        this.commentNotRepply.sort((a, b) => {
            const aHour = a.creationTime.substring(0, 2);
            const aMinutes = a.creationTime.substring(3, 5);
            const aSecond = a.creationTime.substring(6, 8);
            const aDay = a.creationTime.substring(9, 11);
            const aMonth = a.creationTime.substring(12, 14);
            const aYear = a.creationTime.substring(15, 19);
            const bHour = b.creationTime.substring(0, 2);
            const bMinutes = b.creationTime.substring(3, 5);
            const bSecond = b.creationTime.substring(6, 8);
            const bDay = b.creationTime.substring(9, 11);
            const bMonth = b.creationTime.substring(12, 14);
            const bYear = b.creationTime.substring(15, 19);
            const aDate = new Date();
            aDate.setFullYear(aYear);
            aDate.setMonth(aMonth - 1);
            aDate.setDate(aDay);
            aDate.setHours(aHour);
            aDate.setMinutes(aMinutes);
            aDate.setSeconds(aSecond);
            const bDate = new Date();
            bDate.setFullYear(bYear);
            bDate.setMonth(bMonth - 1);
            bDate.setDate(bDay);
            bDate.setHours(bHour);
            bDate.setMinutes(bMinutes);
            bDate.setSeconds(bSecond);
            return <any>aDate - <any>bDate;
        });
        this.commentRepply.sort((a, b) => {
            const aHour = a.creationTime.substring(0, 2);
            const aMinutes = a.creationTime.substring(3, 5);
            const aSecond = a.creationTime.substring(6, 8);
            const aDay = a.creationTime.substring(9, 11);
            const aMonth = a.creationTime.substring(12, 14);
            const aYear = a.creationTime.substring(15, 19);
            const bHour = b.creationTime.substring(0, 2);
            const bMinutes = b.creationTime.substring(3, 5);
            const bSecond = b.creationTime.substring(6, 8);
            const bDay = b.creationTime.substring(9, 11);
            const bMonth = b.creationTime.substring(12, 14);
            const bYear = b.creationTime.substring(15, 19);
            const aDate = new Date();
            aDate.setFullYear(aYear);
            aDate.setMonth(aMonth - 1);
            aDate.setDate(aDay);
            aDate.setHours(aHour);
            aDate.setMinutes(aMinutes);
            aDate.setSeconds(aSecond);
            const bDate = new Date();
            bDate.setFullYear(bYear);
            bDate.setMonth(bMonth - 1);
            bDate.setDate(bDay);
            bDate.setHours(bHour);
            bDate.setMinutes(bMinutes);
            bDate.setSeconds(bSecond);
            return <any>aDate - <any>bDate;
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
            return endDate.getDate() + '/' + (endDate.getMonth() + 1) + '/' + endDate.getFullYear();
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

    getNumCommentRepById(id: any) {
        let count = 0;
        for (const rep of this.commentRepply) {
            if (rep.parentId === id) {
                count++;
            }
        }
        return count;
    }

    repComment(id: any) {
        const role = localStorage.getItem('role');
        if (role !== 'STUDENT') {
            alert(this.translate.instant('ALERT.OnlyStudentCanComment'));
            return;
        }
        // @ts-ignore
        const value = document.getElementById('commentRepTextArea-' + id).value;
        if (this.user === undefined) {
            this.user = JSON.parse(localStorage.getItem('student'));
        }
        const data = {
            studentId: this.user.id,
            subjectId: this.subject.id,
            content: value,
            reply: true,
            parentId: id
        }
        this.api.repComment(data, id).subscribe(next => {
            this.getData();
        });
    }

    comment(value) {
        const role = localStorage.getItem('role');
        if (role !== 'STUDENT') {
            alert(this.translate.instant('ALERT.OnlyStudentCanComment'));
            return;
        }
        if (this.user === undefined) {
            this.user = JSON.parse(localStorage.getItem('student'));
        }
        const data = {
            studentId: this.user.id,
            subjectId: this.subject.id,
            content: value,
            reply: false
        }
        this.api.comment(data).subscribe(next => {
            this.getData();
        });
    }
}
