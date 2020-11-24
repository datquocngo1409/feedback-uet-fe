import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticalRoutingModule } from './statistical-routing.module';
import { StatisticalSubjectComponent } from './statistical-subject/statistical-subject.component';
import { StatisticalTeacherComponent } from './statistical-teacher/statistical-teacher.component';
import {TranslateModule} from '@ngx-translate/core';
import {MatCardModule} from '@angular/material/card';
import {SubjectModule} from '../subject/subject.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DetailStatisticalSubjectComponent } from './detail/detail-statistical-subject/detail-statistical-subject.component';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {ChartsModule} from 'ng2-charts';
import {NgxEasypiechartModule} from 'ngx-easypiechart';
import {DoughnutComponent} from '../../../core/doughnut/doughnut.component';
import {NgxDonutChartModule} from 'ngx-doughnut-chart';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { DetailStatisticalTeacherComponent } from './detail/detail-statistical-teacher/detail-statistical-teacher.component';


@NgModule({
  declarations: [StatisticalSubjectComponent, StatisticalTeacherComponent, DetailStatisticalSubjectComponent, DoughnutComponent, DetailStatisticalTeacherComponent],
    imports: [
        CommonModule,
        StatisticalRoutingModule,
        TranslateModule,
        MatCardModule,
        SubjectModule,
        MatDatepickerModule,
        NgCircleProgressModule,
        ChartsModule,
        NgxEasypiechartModule,
        NgxDonutChartModule,
        NgxChartsModule
    ],
    exports: [
        DoughnutComponent
    ]
})
export class StatisticalModule { }
