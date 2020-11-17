import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailSubjectComponent } from './admin-detail-subject.component';

describe('AdminDetailSubjectComponent', () => {
  let component: AdminDetailSubjectComponent;
  let fixture: ComponentFixture<AdminDetailSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDetailSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetailSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
