import {Component, OnInit, ViewChild} from '@angular/core';
import {MatCalendar} from '@angular/material/datepicker';
import {Moment} from 'moment';
import {ISubject} from '../../subject/data/subject';
import {SubjectService} from '../../../../services/subject/subject.service';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {API} from '../../../../services/apis-call/api.service';

@Component({
  selector: 'ms-statistical-teacher',
  templateUrl: './statistical-teacher.component.html',
  styleUrls: ['./statistical-teacher.component.scss']
})
export class StatisticalTeacherComponent implements OnInit {

  @ViewChild('calendar') calendar: MatCalendar<Moment>;

  public teachers;
  selectedDate: Moment;

  constructor(private api: API, private router: Router, private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.api.getTeacherFull().subscribe(data => {
      this.teachers = data;
    });
  }

  viewDetail(id: any) {
    this.router.navigate(['/statistical/teacher/' + id]);
  }
}
