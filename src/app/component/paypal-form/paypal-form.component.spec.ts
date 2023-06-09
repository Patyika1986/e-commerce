import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalFormComponent } from './paypal-form.component';

describe('PaypalFormComponent', () => {
  let component: PaypalFormComponent;
  let fixture: ComponentFixture<PaypalFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaypalFormComponent]
    });
    fixture = TestBed.createComponent(PaypalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
