import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectingExamTypeAndLengthComponentComponent } from './selecting-exam-type-and-length-component.component';

describe('SelectingExamTypeAndLengthComponentComponent', () => {
  let component: SelectingExamTypeAndLengthComponentComponent;
  let fixture: ComponentFixture<SelectingExamTypeAndLengthComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectingExamTypeAndLengthComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectingExamTypeAndLengthComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
