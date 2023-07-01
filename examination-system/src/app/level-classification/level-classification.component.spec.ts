import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelClassificationComponent } from './level-classification.component';

describe('LevelClassificationComponent', () => {
  let component: LevelClassificationComponent;
  let fixture: ComponentFixture<LevelClassificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelClassificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
