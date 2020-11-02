import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListSubjectComponent} from './list-subject/list-subject.component';
import {DetailSubjectComponent} from './detail-subject/detail-subject.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListSubjectComponent
  },
  {
    path: ':id',
    component: DetailSubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
