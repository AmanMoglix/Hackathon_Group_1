import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmsActionComponent } from './oms-action.component';

describe('OmsActionComponent', () => {
  let component: OmsActionComponent;
  let fixture: ComponentFixture<OmsActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmsActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmsActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
