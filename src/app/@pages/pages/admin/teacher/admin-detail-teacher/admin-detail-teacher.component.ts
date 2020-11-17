import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {API} from '../../../../../services/apis-call/api.service';

@Component({
  selector: 'ms-admin-detail-teacher',
  templateUrl: './admin-detail-teacher.component.html',
  styleUrls: ['./admin-detail-teacher.component.scss']
})
export class AdminDetailTeacherComponent implements OnInit {

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
        'name': ['', Validators.required]
      });
    } else {
      this.ACTION = 'EDIT';
    }
  }

  onSubmit() {
    this.api.signupTeacher(this.formGroup.value).subscribe(next => {
      this.router.navigate(['admin/teacher']);
    })
  }
}
