import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotRatedSubjectComponent } from './not-rated-subject.component';

describe('NotRatedSubjectComponent', () => {
  let component: NotRatedSubjectComponent;
  let fixture: ComponentFixture<NotRatedSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotRatedSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotRatedSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
