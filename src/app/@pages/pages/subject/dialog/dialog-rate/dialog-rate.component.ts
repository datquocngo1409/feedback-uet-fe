import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'ms-dialog-rate',
  templateUrl: './dialog-rate.component.html',
  styleUrls: ['./dialog-rate.component.scss']
})
export class DialogRateComponent implements OnInit {

  subjectData;
  constructor( @Inject(MAT_DIALOG_DATA) public subject: any) { }

  ngOnInit(): void {
    this.subjectData = this.subject.subject;
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

  onCancel() {

  }
}
