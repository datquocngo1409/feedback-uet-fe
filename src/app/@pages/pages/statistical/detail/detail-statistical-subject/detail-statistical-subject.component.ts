import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {API} from '../../../../../services/apis-call/api.service';
import {ActivatedRoute} from '@angular/router';
import * as HighCharts from 'highcharts';

@Component({
    selector: 'ms-detail-statistical-subject',
    templateUrl: './detail-statistical-subject.component.html',
    styleUrls: ['./detail-statistical-subject.component.scss']
})
export class DetailStatisticalSubjectComponent implements OnInit {

    subject;
    ratingSubjects;

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
        this.api.getSubjectById(id).subscribe(subject => {
            this.subject = subject;
            this.api.getRatingSubjectBySubjectId(this.subject.id).subscribe(ratingSubjects => {
                this.ratingSubjects = ratingSubjects;
                let s1 = 0, s2 = 0, s3 = 0, s4 = 0, s5 = 0;
                for (const rs of this.ratingSubjects) {
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

    getEndDate(startDate: any) {
        if (startDate !== null) {
            const data = startDate.split('/');
            const startDateDate = new Date();
            startDateDate.setDate(data[0]);
            startDateDate.setMonth(data[1] - 1);
            startDateDate.setFullYear(data[2]);
            const miliseconds = 15 * 7 * 24 * 3600 * 1000;
            const endDate = new Date(startDateDate.getTime() + miliseconds);
            return endDate.getDate() + '/' + endDate.getMonth() + 1 + '/' + endDate.getFullYear();
        } else {
            return null;
        }
    }

    onSelect(data): void {
    }

    onActivate(data): void {
    }

    onDeactivate(data): void {
    }
}