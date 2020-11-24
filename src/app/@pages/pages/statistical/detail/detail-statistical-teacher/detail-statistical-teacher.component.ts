import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';
import {API} from '../../../../../services/apis-call/api.service';

@Component({
  selector: 'ms-detail-statistical-teacher',
  templateUrl: './detail-statistical-teacher.component.html',
  styleUrls: ['./detail-statistical-teacher.component.scss']
})
export class DetailStatisticalTeacherComponent implements OnInit {
  teacher;
  ratingTeacher;

  single: any[];
  view: any[] = [0, 0];

  // options
  gradient = true;
  showLegend = false;
  showLabels = true;
  isDoughnut = true;
  legendPosition = 'below';

  colorScheme = {
    domain: ['#F43006', '#E39D31', '#F3F30E', '#0EE9F3', '#0EF33F']
  };

  constructor(
      private translate: TranslateService,
      private route: ActivatedRoute,
      private api: API
  ) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.api.getTeacherByIdFull(id).subscribe(teacher => {
      this.teacher = teacher;
      this.api.getRatingTeacherByTeacherId(this.teacher.id).subscribe(ratingTeacher => {
        this.ratingTeacher = ratingTeacher;
        let s1 = 0, s2 = 0, s3 = 0, s4 = 0, s5 = 0;
        for (const rs of this.ratingTeacher) {
          if (rs.point === 1) {
            s1++;
          } else if (rs.point === 2) {
            s2++;
          } else if (rs.point === 3) {
            s3++;
          } else if (rs.point === 4) {
            s4++;
          } else if (rs.point === 5) {
            s5++;
          }
        }
        this.single = [
          {
            'name': '1 Star (' + s1 + ')',
            'value': s1
          },
          {
            'name': '2 Star (' + s2 + ')',
            'value': s2
          },
          {
            'name': '3 Star (' + s3 + ')',
            'value': s3
          },
          {
            'name': '4 Star (' + s4 + ')',
            'value': s4
          },
          {
            'name': '5 Star (' + s5 + ')',
            'value': s5
          }
        ];
      });
    });
  }

  onSelect(data): void {
  }

  onActivate(data): void {
  }

  onDeactivate(data): void {
  }
}
