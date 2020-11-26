import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {API} from '../../../../../services/apis-call/api.service';
import {TranslateService} from '@ngx-translate/core';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';

@Component({
    selector: 'ms-admin-subject',
    templateUrl: './admin-subject.component.html',
    styleUrls: ['./admin-subject.component.scss']
})
export class AdminSubjectComponent implements OnInit, AfterViewInit {

    displayedColumns = ['code', 'name', 'teacherName', 'startDate', 'endDate', 'rating', 'ratingCount', 'edit'];
    dataSource;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort, {}) sort: MatSort;

    subjects;
    data = [];

    constructor(private api: API, private translate: TranslateService, private router: Router) {
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    ngOnInit(): void {
        this.getData();
    }

    getData() {
        this.data = [];
        this.api.getSubjectList().subscribe(subjects => {
            this.subjects = subjects;
            for (const subject of this.subjects) {
                const d = {
                    id: subject.id,
                    code: subject.code,
                    name: subject.name,
                    teacherName: subject.teacherName,
                    startDate: subject.startDate,
                    endDate: this.getEndDate(subject.startDate),
                    rating: subject.rating,
                    ratingCount: subject.ratingCount
                };
                this.data.push(d);
            }
            this.dataSource = new MatTableDataSource(this.data);
            this.dataSource.paginator = this.paginator;
        });
    }

    onNavigate(productCode) {
        console.log(`product code ${productCode}`);
    }

    edit(id: any) {
        this.router.navigate(['/admin/subject/' + id]);
    }

    delete(id: any) {
        this.api.deleteStudent(id).subscribe(next => {
            this.getData();
        });
    }

    getEndDate(startDate: any) {
        if (startDate !== null) {
            const data = startDate.split('/');
            const startDateDate = new Date();
            startDateDate.setDate(data[0]);
            startDateDate.setMonth(data[1] - 1);
            startDateDate.setFullYear(data[2]);
            const miliseconds = 15 * 7 * 24 * 3600 * 1000;
            const endDate = new Date(startDateDate.getTime() + miliseconds);
            return endDate.getDate() + '/' + (parseInt(endDate.getMonth().toString(), 10) + 1) + '/' + endDate.getFullYear();
        } else {
            return null;
        }
    }

    newItem() {
        this.router.navigate(['/admin/subject/new']);
    }
}
