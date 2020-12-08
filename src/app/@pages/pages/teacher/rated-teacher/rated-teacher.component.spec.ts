import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatedTeacherComponent } from './rated-teacher.component';

describe('RatedTeacherComponent', () => {
  let component: RatedTeacherComponent;
  let fixture: ComponentFixture<RatedTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatedTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatedTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
