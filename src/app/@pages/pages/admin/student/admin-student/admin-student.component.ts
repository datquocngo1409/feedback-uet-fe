import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {API} from '../../../../../services/apis-call/api.service';
import {TranslateService} from '@ngx-translate/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';

@Component({
    selector: 'ms-admin-student',
    templateUrl: './admin-student.component.html',
    styleUrls: ['./admin-student.component.scss']
})
export class AdminStudentComponent implements OnInit, AfterViewInit {

    displayedColumns = ['mssv', 'name', 'username', 'age', 'address', 'email', 'phone', 'edit', 'delete'];
    dataSource;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort, {}) sort: MatSort;

    students;
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

    onNavigate(productCode) {
        console.log(`product code ${productCode}`);
    }

    edit(id: any) {
        this.router.navigate(['/admin/student/' + id]);
    }

    delete(id: any) {
        this.api.deleteStudent(id).subscribe(next => {
            this.getData();
        });
    }

    getData() {
        this.data = [];
        this.api.getStudentFull().subscribe(students => {
            this.students = students;
            for (const student of this.students) {
                const d = {
                    id: student.id,
                    name: student.user.name,
                    mssv: student.mssv,
                    username: student.user.username,
                    age: student.user.age,
                    address: student.user.address,
                    email: student.user.email,
                    phone: student.user.phone,
                    userId: student.user.id
                };
                this.data.push(d);
            }
            this.dataSource = new MatTableDataSource(this.data);
            this.dataSource.paginator = this.paginator;
        });
    }

    newItem() {
        this.router.navigate(['/admin/student/new']);
    }
}
