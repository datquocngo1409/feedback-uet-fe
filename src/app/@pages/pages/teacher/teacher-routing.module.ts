import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListTeacherComponent} from './list-teacher/list-teacher.component';
import {DetailTeacherComponent} from './detail-teacher/detail-teacher.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListTeacherComponent
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
