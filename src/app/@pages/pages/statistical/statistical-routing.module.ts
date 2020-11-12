import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StatisticalSubjectComponent} from './statistical-subject/statistical-subject.component';
import {StatisticalTeacherComponent} from './statistical-teacher/statistical-teacher.component';
import {DetailStatisticalSubjectComponent} from './detail/detail-statistical-subject/detail-statistical-subject.component';

const routes: Routes = [
  {
    path: 'subject',
    component: StatisticalSubjectComponent,
  },
  {
    path: 'subject/:id',
    component: DetailStatisticalSubjectComponent
  },
  {
    path: 'teacher',
    component: StatisticalTeacherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticalRoutingModule { }
