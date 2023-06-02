import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToPaymentComponent } from './to-payment.component';

describe('ToPaymentComponent', () => {
  let component: ToPaymentComponent;
  let fixture: ComponentFixture<ToPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToPaymentComponent]
    });
    fixture = TestBed.createComponent(ToPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
