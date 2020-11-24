import { Component, OnInit } from '@angular/core';
import {API} from '../../../../services/apis-call/api.service';
import {Moment} from 'moment';
import {Router} from '@angular/router';

@Component({
  selector: 'ms-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.scss']
})
export class ListTeacherComponent implements OnInit {

  teachers;
  selectedDate: Moment;
  constructor(private api: API, private router: Router) { }

  ngOnInit(): void {
    this.api.getTeacherFull().subscribe(teachers => {
      this.teachers = teachers;
    })
  }

    viewDetail(id: any) {
      this.router.navigate(['/teacher/' + id]);
    }
}
