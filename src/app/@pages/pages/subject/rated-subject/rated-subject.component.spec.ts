import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatedSubjectComponent } from './rated-subject.component';

describe('RatedSubjectComponent', () => {
  let component: RatedSubjectComponent;
  let fixture: ComponentFixture<RatedSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatedSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatedSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
