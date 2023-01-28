import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteQuestionsListeningComponent } from './infinite-questions-listening.component';

describe('InfiniteQuestionsListeningComponent', () => {
  let component: InfiniteQuestionsListeningComponent;
  let fixture: ComponentFixture<InfiniteQuestionsListeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfiniteQuestionsListeningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfiniteQuestionsListeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
