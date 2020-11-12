import {Component, OnInit, ViewChild} from '@angular/core';
import {API} from '../../../../services/apis-call/api.service';
import {MatCalendar} from '@angular/material/datepicker';
import {Moment} from 'moment';
import {ISubject} from '../../subject/data/subject';
import {SubjectService} from '../../../../services/subject/subject.service';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'ms-statistical-subject',
  templateUrl: './statistical-subject.component.html',
  styleUrls: ['./statistical-subject.component.scss']
})
export class StatisticalSubjectComponent implements OnInit {

  @ViewChild('calendar') calendar: MatCalendar<Moment>;

  public subjects;
  public subjectsDto: ISubject[];
  selectedDate: Moment;

  constructor(private subjectService: SubjectService, private router: Router, private translate: TranslateService) {
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
    this.router.navigate(['/statistical/subject/' + id]);
  }

}
