import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SubjectRoutingModule} from './subject-routing.module';
import {DetailSubjectComponent} from './detail-subject/detail-subject.component';
import {ListSubjectComponent} from './list-subject/list-subject.component';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {RatingComponent} from '../../../core/rating/rating.component';
import {MatInputModule} from '@angular/material/input';
import { DialogRateComponent } from './dialog/dialog-rate/dialog-rate.component';
import {TranslateModule} from '@ngx-translate/core';
import {RatingBigComponent} from '../../../core/rating-big/rating-big.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    declarations: [
        DetailSubjectComponent,
        ListSubjectComponent,
        RatingComponent,
        RatingBigComponent,
        DialogRateComponent
    ],
    imports: [
        CommonModule,
        SubjectRoutingModule,
        MatCardModule,
        MatDatepickerModule,
        MatInputModule,
        TranslateModule,
        MatButtonModule
    ],
    exports: [
        RatingComponent,
        RatingBigComponent
    ]
})
export class SubjectModule {
}
