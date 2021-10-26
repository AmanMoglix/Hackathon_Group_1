import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedOrderComponent } from './assigned-order.component';

describe('AssignedOrderComponent', () => {
  let component: AssignedOrderComponent;
  let fixture: ComponentFixture<AssignedOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
