import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { DetailSubjectComponent } from './detail-subject/detail-subject.component';
import {ListSubjectComponent} from './list-subject/list-subject.component';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {BarRatingModule} from 'ngx-bar-rating';
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
      DetailSubjectComponent,
      ListSubjectComponent
  ],
    imports: [
        CommonModule,
        SubjectRoutingModule,
        MatCardModule,
        MatDatepickerModule,
        BarRatingModule,
        NgbRatingModule
    ]
})
export class SubjectModule { }
