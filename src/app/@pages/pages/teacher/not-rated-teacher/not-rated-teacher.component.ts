import { Component, OnInit } from '@angular/core';
import {Moment} from 'moment';
import {API} from '../../../../services/apis-call/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'gts-fe-not-rated-teacher',
  templateUrl: './not-rated-teacher.component.html',
  styleUrls: ['./not-rated-teacher.component.scss']
})
export class NotRatedTeacherComponent implements OnInit {
  teachers;
  student;
  selectedDate: Moment;
  teacherWhichStudentRatedIds = [];
  ratedTeacher = [];
  ratings;
  constructor(private api: API, private router: Router) { }

  ngOnInit(): void {
    this.api.getTeacherFull().subscribe(teachers => {
      this.student = JSON.parse(localStorage.getItem('student'));
      this.teachers = teachers;
      this.api.getRatingTeacher().subscribe(rating => {
        this.ratings = rating;
        for (const r of this.ratings) {
          if (r.studentId === this.student.id) {
            this.teacherWhichStudentRatedIds.push(r.teacherId);
          }
        }
        for (const teacher of this.teachers) {
          if (this.teacherWhichStudentRatedIds.indexOf(teacher.id) < 0) {
            this.ratedTeacher.push(teacher);
          }
        }
      })
    })
  }

  viewDetail(id: any) {
    this.router.navigate(['/teacher/' + id]);
  }
}
