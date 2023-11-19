import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDataTableComponent } from './student-data-table.component';

describe('StudentDataTableComponent', () => {
  let component: StudentDataTableComponent;
  let fixture: ComponentFixture<StudentDataTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentDataTableComponent]
    });
    fixture = TestBed.createComponent(StudentDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
