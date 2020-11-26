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
  id;
  user;
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private formBuilder: FormBuilder,
      private api: API
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    if (id === 'new') {
      this.ACTION = 'NEW';
      this.formGroup = this.formBuilder.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
        name: ['', Validators.required]
      });
    } else {
      this.ACTION = 'EDIT';
      this.formGroup = this.formBuilder.group({
        id: [0],
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
        mssv: [0, Validators.required],
        name: ['', Validators.required],
        age: [18],
        phone: ['', [Validators.minLength(10), Validators.maxLength(10)]],
        email: ['', Validators.email],
        address: [''],
        avatar: [''],
        token: [''],
        role: ['']
      });
      this.loadEdit();
    }
  }

  private loadEdit() {
    this.api.getUserById(this.id).subscribe(user => {
      this.user = user;
      console.log(this.user);
      this.formGroup.patchValue(this.user);
      this.formGroup.controls.username.disable();
      this.formGroup.controls.mssv.disable();
    })
  }

  onSubmit() {
    if (this.ACTION === 'NEW') {
      this.api.signup(this.formGroup.value).subscribe(next => {
        this.router.navigate(['admin/teacher']);
      })
    } else {
      this.formGroup.controls.username.enable();
      this.api.updateUser(this.id, this.formGroup.value).subscribe(next => {
        this.router.navigate(['admin/teacher']);
      })
    }
  }
}
