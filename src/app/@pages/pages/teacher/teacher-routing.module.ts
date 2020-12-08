import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListTeacherComponent} from './list-teacher/list-teacher.component';
import {DetailTeacherComponent} from './detail-teacher/detail-teacher.component';
import {RatedTeacherComponent} from './rated-teacher/rated-teacher.component';
import {NotRatedTeacherComponent} from './not-rated-teacher/not-rated-teacher.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListTeacherComponent
  },
  {
    path: 'rated',
    component: RatedTeacherComponent
  },
  {
    path: 'not-rated',
    component: NotRatedTeacherComponent
  },
  {
    path: ':id',
    component: DetailTeacherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
