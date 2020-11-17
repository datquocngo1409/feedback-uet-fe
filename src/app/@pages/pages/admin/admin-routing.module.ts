import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminSubjectComponent} from './subject/admin-subject/admin-subject.component';
import {AdminDetailSubjectComponent} from './subject/admin-detail-subject/admin-detail-subject.component';
import {AdminTeacherComponent} from './teacher/admin-teacher/admin-teacher.component';
import {AdminDetailTeacherComponent} from './teacher/admin-detail-teacher/admin-detail-teacher.component';
import {AdminStudentComponent} from './student/admin-student/admin-student.component';
import {AdminDetailStudentComponent} from './student/admin-detail-student/admin-detail-student.component';

const routes: Routes = [
  {
    path: 'subject',
    component: AdminSubjectComponent,
  },
  {
    path: 'subject/:id',
    component: AdminDetailSubjectComponent
  },
  {
    path: 'teacher',
    component: AdminTeacherComponent
  },
  {
    path: 'teacher/:id',
    component: AdminDetailTeacherComponent
  },
  {
    path: 'student',
    component: AdminStudentComponent,
  },
  {
    path: 'student/:id',
    component: AdminDetailStudentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
