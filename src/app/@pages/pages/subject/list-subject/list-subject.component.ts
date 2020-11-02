import {Component, OnInit, ViewChild} from '@angular/core';
import {SubjectService} from '../../../../services/subject/subject.service';
import {ISubject} from '../data/subject';
import {MatCalendar} from '@angular/material/datepicker';
import {Moment} from 'moment';

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
  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.subjectService.getList().subscribe(data => {
      this.subjects = data;
    })
  }

}
