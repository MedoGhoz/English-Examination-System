import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeningInfiniteComponent } from './listening-infinite.component';

describe('ListeningInfiniteComponent', () => {
  let component: ListeningInfiniteComponent;
  let fixture: ComponentFixture<ListeningInfiniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeningInfiniteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeningInfiniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
