import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailTeacherComponent } from './admin-detail-teacher.component';

describe('AdminDetailTeacherComponent', () => {
  let component: AdminDetailTeacherComponent;
  let fixture: ComponentFixture<AdminDetailTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDetailTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetailTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
