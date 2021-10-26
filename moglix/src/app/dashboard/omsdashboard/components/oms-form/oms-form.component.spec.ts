import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmsFormComponent } from './oms-form.component';

describe('OmsFormComponent', () => {
  let component: OmsFormComponent;
  let fixture: ComponentFixture<OmsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
