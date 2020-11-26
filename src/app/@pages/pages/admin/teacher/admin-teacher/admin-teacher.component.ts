import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {API} from 'app/services/apis-call/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';

@Component({
    selector: 'ms-admin-teacher',
    templateUrl: './admin-teacher.component.html',
    styleUrls: ['./admin-teacher.component.scss']
})
export class AdminTeacherComponent implements OnInit, AfterViewInit {

    displayedColumns = ['name', 'username', 'age', 'address', 'email', 'phone', 'edit', 'delete'];
    dataSource;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort, {}) sort: MatSort;
    teachers;
    data = [];

    constructor(private translate: TranslateService, private api: API, private router: Router) {
    }

    ngOnInit(): void {
        this.getData();
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    onNavigate(productCode) {
        console.log(`product code ${productCode}`);
    }

    edit(id: any) {
        this.router.navigate(['/admin/teacher/' + id]);
    }

    getData() {
        this.data = [];
        this.api.getTeacherFull().subscribe(teachers => {
            this.teachers = teachers;
            for (const teacher of this.teachers) {
                const d = {
                    id: teacher.id,
                    name: teacher.user.name,
                    username: teacher.user.username,
                    age: teacher.user.age,
                    address: teacher.user.address,
                    email: teacher.user.email,
                    phone: teacher.user.phone,
                    userId: teacher.user.id
                };
                this.data.push(d);
            }
            this.dataSource = new MatTableDataSource(this.data);
            this.dataSource.paginator = this.paginator;
        });
    }

    delete(id: any) {
        this.api.deleteTeacher(id).subscribe(next => {
            this.getData();
        });
    }

    newItem() {
        this.router.navigate(['/admin/teacher/new']);
    }
}
