import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { distractorsDemoComponent } from './distractorsDemo.component';

describe('distractorsDemocomponent', () => {
  let component: distractorsDemoComponent;
  let fixture: ComponentFixture<distractorsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [distractorsDemoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(distractorsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

