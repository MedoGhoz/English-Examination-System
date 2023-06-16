import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabDemoComponent } from './VocabDemo.component';

describe('GrammarDemoomponent', () => {
  let component: VocabDemoComponent;
  let fixture: ComponentFixture<VocabDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VocabDemoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(VocabDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

