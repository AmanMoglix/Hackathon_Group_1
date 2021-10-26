import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineActionComponent } from './online-action.component';

describe('OnlineActionComponent', () => {
  let component: OnlineActionComponent;
  let fixture: ComponentFixture<OnlineActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
