import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {API} from '../../../../services/apis-call/api.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'ms-detail-teacher',
    templateUrl: './detail-teacher.component.html',
    styleUrls: ['./detail-teacher.component.scss']
})
export class DetailTeacherComponent implements OnInit {

    teacher;
    itemId;
    rating;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private api: API,
        private translate: TranslateService
    ) {
    }

    ngOnInit(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.api.getTeacherByIdFull(id).subscribe(teacher => {
          this.teacher = teacher;
          this.itemId = this.teacher.id;
          this.rating = this.teacher.rating.toFixed(0);
        })
    }

  onCancel() {

  }

  rate() {
      const role = localStorage.getItem('role');
      if (role === 'STUDENT') {
          const student = JSON.parse(localStorage.getItem('student'));
          this.api.rateTeacher(student.id, this.itemId, this.rating).subscribe(next => {
              this.router.navigate(['/teacher/list']);
          });
      } else {
          alert(this.translate.instant('ALERT.OnlyStudentCanRate'));
      }
  }

  getRating(value: any) {
      this.rating = value.rating;
      this.itemId = value.itemId;
  }
}
