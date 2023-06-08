import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlarnaPaymentFormComponent } from './klarna-payment-form.component';

describe('KlarnaPaymentFormComponent', () => {
  let component: KlarnaPaymentFormComponent;
  let fixture: ComponentFixture<KlarnaPaymentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KlarnaPaymentFormComponent]
    });
    fixture = TestBed.createComponent(KlarnaPaymentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
