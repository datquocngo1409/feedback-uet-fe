import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { ListTeacherComponent } from './list-teacher/list-teacher.component';
import {TranslateModule} from '@ngx-translate/core';
import {MatCardModule} from '@angular/material/card';
import {SubjectModule} from '../subject/subject.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DetailTeacherComponent } from './detail-teacher/detail-teacher.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [ListTeacherComponent, DetailTeacherComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    TranslateModule,
    MatCardModule,
    SubjectModule,
    MatDatepickerModule,
    MatButtonModule
  ]
})
export class TeacherModule { }
