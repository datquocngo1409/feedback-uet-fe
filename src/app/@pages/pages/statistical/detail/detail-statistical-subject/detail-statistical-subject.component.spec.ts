import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailStatisticalSubjectComponent } from './detail-statistical-subject.component';

describe('DetailStatisticalSubjectComponent', () => {
  let component: DetailStatisticalSubjectComponent;
  let fixture: ComponentFixture<DetailStatisticalSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailStatisticalSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailStatisticalSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
