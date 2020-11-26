import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminStudentComponent} from './student/admin-student/admin-student.component';
import {AdminDetailStudentComponent} from './student/admin-detail-student/admin-detail-student.component';
import {AdminDetailSubjectComponent} from './subject/admin-detail-subject/admin-detail-subject.component';
import {AdminTeacherComponent} from './teacher/admin-teacher/admin-teacher.component';
import {AdminDetailTeacherComponent} from './teacher/admin-detail-teacher/admin-detail-teacher.component';
import {TranslateModule} from '@ngx-translate/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {AdminSubjectComponent} from './subject/admin-subject/admin-subject.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
    declarations: [
        AdminStudentComponent,
        AdminDetailStudentComponent,
        AdminStudentComponent,
        AdminSubjectComponent,
        AdminDetailStudentComponent,
        AdminDetailSubjectComponent,
        AdminTeacherComponent,
        AdminDetailTeacherComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        TranslateModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatSortModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatTooltipModule,
        ReactiveFormsModule,
        FlexModule,
        MatCardModule,
        MatDividerModule,
        MatSelectModule,
        FormsModule
    ]
})
export class AdminModule {
}
