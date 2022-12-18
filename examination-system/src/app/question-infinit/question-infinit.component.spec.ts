import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionInfinitComponent } from './question-infinit.component';

describe('QuestionInfinitComponent', () => {
  let component: QuestionInfinitComponent;
  let fixture: ComponentFixture<QuestionInfinitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionInfinitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionInfinitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
