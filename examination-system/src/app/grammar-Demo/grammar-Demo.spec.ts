import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarDemoComponent } from './grammar-Demo.component';

describe('GrammarDemoomponent', () => {
  let component: GrammarDemoComponent;
  let fixture: ComponentFixture<GrammarDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrammarDemoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GrammarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

