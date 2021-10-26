import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedOrderChildComponent } from './assigned-order-child.component';

describe('AssignedOrderChildComponent', () => {
  let component: AssignedOrderChildComponent;
  let fixture: ComponentFixture<AssignedOrderChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedOrderChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedOrderChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
