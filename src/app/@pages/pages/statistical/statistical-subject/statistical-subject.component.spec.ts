import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticalSubjectComponent } from './statistical-subject.component';

describe('StatisticalSubjectComponent', () => {
  let component: StatisticalSubjectComponent;
  let fixture: ComponentFixture<StatisticalSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticalSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticalSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
