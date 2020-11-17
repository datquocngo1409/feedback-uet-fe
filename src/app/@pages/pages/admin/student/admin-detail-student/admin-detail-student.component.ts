import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {API} from '../../../../../services/apis-call/api.service';

@Component({
  selector: 'ms-admin-detail-student',
  templateUrl: './admin-detail-student.component.html',
  styleUrls: ['./admin-detail-student.component.scss']
})
export class AdminDetailStudentComponent implements OnInit {

  ACTION;
  formGroup: FormGroup;
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private formBuilder: FormBuilder,
      private api: API
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === 'new') {
      this.ACTION = 'NEW';
      this.formGroup = this.formBuilder.group({
        'username': ['', [Validators.required]],
        'password': ['', [Validators.required]],
        'name': ['', Validators.required],
        'mssv': [0, Validators.required]
      });
    } else {
      this.ACTION = 'EDIT';
    }
  }

  onSubmit() {
    this.api.signup(this.formGroup.value).subscribe(next => {
      this.router.navigate(['admin/student']);
    })
  }
}
