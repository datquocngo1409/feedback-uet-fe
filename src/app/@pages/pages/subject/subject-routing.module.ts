import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListSubjectComponent} from './list-subject/list-subject.component';
import {DetailSubjectComponent} from './detail-subject/detail-subject.component';
import {RatedSubjectComponent} from './rated-subject/rated-subject.component';
import {NotRatedSubjectComponent} from './not-rated-subject/not-rated-subject.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListSubjectComponent
  },
  {
    path: 'rated',
    component: RatedSubjectComponent
  },
  {
    path: 'not-rated',
    component: NotRatedSubjectComponent
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
