import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {API} from '../../../../../services/apis-call/api.service';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'ms-dialog-rate',
    templateUrl: './dialog-rate.component.html',
    styleUrls: ['./dialog-rate.component.scss']
})
export class DialogRateComponent implements OnInit {

    subjectData;
    itemId;
    rating;

    constructor(
        private translate: TranslateService,
        private router: Router,
        public api: API,
        public dialogRef: MatDialogRef<DialogRateComponent>,
        @Inject(MAT_DIALOG_DATA) public subject: any) {
    }

    ngOnInit(): void {
        this.subjectData = this.subject.subject;
        this.rating = this.subjectData.rating.toFixed(0);
        this.itemId = this.subjectData.id;
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

    onCancel() {
        this.dialogRef.close();
    }

    rate() {
        const role = localStorage.getItem('role');
        if (role === 'STUDENT') {
            const student = JSON.parse(localStorage.getItem('student'));
            this.api.rateSubject(student.id, this.itemId, this.rating).subscribe(next => {
                this.router.navigate(['/subject/list']);
                this.dialogRef.close();
            });
        } else {
            alert(this.translate.instant('ALERT.OnlyStudentCanRate'));
            this.dialogRef.close();
        }
    }

    getRating(value: any) {
        this.rating = value.rating;
        this.itemId = value.itemId;
    }
}
