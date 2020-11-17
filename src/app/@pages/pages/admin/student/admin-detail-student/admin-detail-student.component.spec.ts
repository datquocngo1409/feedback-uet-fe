import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailStudentComponent } from './admin-detail-student.component';

describe('AdminDetailStudentComponent', () => {
  let component: AdminDetailStudentComponent;
  let fixture: ComponentFixture<AdminDetailStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDetailStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetailStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
