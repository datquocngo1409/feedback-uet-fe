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

    showDetail;
    subject;
    ratingSubjects;
    single: any[];
    view: any[] = [0, 0];
    days = [];
    dayDatas = [];
    dataChart3: any[] = [];
    single2: any[];

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
        this.showDetail = true;
        const id = +this.route.snapshot.paramMap.get('id');
        this.api.getSubjectById(id).subscribe(subject => {
            this.subject = subject;
            this.api.getRatingSubjectBySubjectId(this.subject.id).subscribe(ratingSubjects => {
                this.ratingSubjects = ratingSubjects;
                this.ratingSubjects.sort(function(a, b) {
                    const keyA = a.point,
                        keyB = b.point;
                    // Compare the 2 dates
                    if (keyA > keyB) { return -1; }
                    if (keyA < keyB) { return 1; }
                    return 0;
                });
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
                    const day = rs.creationTime.substring(9);
                    if (this.days.indexOf(day) < 0) {
                        this.days.push(day);
                        this.dayDatas.push(1);
                    } else {
                        this.dayDatas[this.days.indexOf(day)]++;
                    }
                }
                for (const day of this.days) {
                    this.dataChart3.push({
                        name: day,
                        value: this.dayDatas[this.days.indexOf(day)]
                    })
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
                this.dataChart3.sort(function(a, b) {
                    const aDay = a.name.substring(0, 2);
                    const aMonth = a.name.substring(3, 5);
                    const aYear = a.name.substr(6);
                    const bDay = b.name.substring(0, 2);
                    const bMonth = b.name.substring(3, 5);
                    const bYear = b.name.substr(6);
                    const keyA = new Date(aYear, aMonth, aDay),
                        keyB = new Date(bYear, bMonth, bDay);
                    // Compare the 2 dates
                    if (keyA < keyB) { return -1; }
                    if (keyA > keyB) { return 1; }
                    return 0;
                });
                this.single2 = this.dataChart3;
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
            return endDate.getDate() + '/' + (endDate.getMonth() + 1) + '/' + endDate.getFullYear();
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

    isShowDetailButton() {
        if (this.showDetail) {
            return 'right-30';
        } else {
            return 'right-0';
        }
    }

    isShowDetail() {
        if (!this.showDetail) {
            return 'left';
        } else {
            return 'full-content';
        }
    }
}
