import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageWithTwoButtonsComponent } from './home-page-with-two-buttons.component';

describe('HomePageWithTwoButtonsComponent', () => {
  let component: HomePageWithTwoButtonsComponent;
  let fixture: ComponentFixture<HomePageWithTwoButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageWithTwoButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageWithTwoButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
