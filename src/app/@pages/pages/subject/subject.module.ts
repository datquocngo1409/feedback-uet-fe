import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SubjectRoutingModule} from './subject-routing.module';
import {DetailSubjectComponent} from './detail-subject/detail-subject.component';
import {ListSubjectComponent} from './list-subject/list-subject.component';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {RatingComponent} from '../../../core/rating/rating.component';


@NgModule({
    declarations: [
        DetailSubjectComponent,
        ListSubjectComponent,
        RatingComponent
    ],
    imports: [
        CommonModule,
        SubjectRoutingModule,
        MatCardModule,
        MatDatepickerModule
    ],
})
export class SubjectModule {
}
