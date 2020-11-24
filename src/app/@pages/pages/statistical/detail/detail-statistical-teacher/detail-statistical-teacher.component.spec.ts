import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailStatisticalTeacherComponent } from './detail-statistical-teacher.component';

describe('DetailStatisticalTeacherComponent', () => {
  let component: DetailStatisticalTeacherComponent;
  let fixture: ComponentFixture<DetailStatisticalTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailStatisticalTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailStatisticalTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
