import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {API} from '../../../../../services/apis-call/api.service';

@Component({
  selector: 'ms-admin-detail-subject',
  templateUrl: './admin-detail-subject.component.html',
  styleUrls: ['./admin-detail-subject.component.scss']
})
export class AdminDetailSubjectComponent implements OnInit {

  ACTION;
  teachers;
  formGroup: FormGroup;
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private formBuilder: FormBuilder,
      private api: API
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.api.getTeachertFull().subscribe(teachers => {
      this.teachers = teachers;
      if (id === 'new') {
        this.ACTION = 'NEW';
        this.formGroup = this.formBuilder.group({
          'code': ['', [Validators.required]],
          'name': ['', Validators.required],
          'teacherId': [0, Validators.required],
          'startDate': ['', Validators.required]
        });
      } else {
        this.ACTION = 'EDIT';
      }
    })
  }

  onSubmit() {
    this.formatStartDate(this.formGroup.value.startDate);
    this.api.createSubject(this.formGroup.value).subscribe(next => {
      this.router.navigate(['admin/subject']);
    })
  }

  select(value: any) {
    this.formGroup.patchValue({teacherId: value});
  }

  getSelectedValue(i: number, id: any) {

  }

  private formatStartDate(startDate) {
    const data = startDate.split('-');
    const year = data[0];
    const month = data[1];
    const day = data[2];
    const result = day + '/' + month + '/' + year;
    this.formGroup.patchValue({startDate: result});
  }
}
