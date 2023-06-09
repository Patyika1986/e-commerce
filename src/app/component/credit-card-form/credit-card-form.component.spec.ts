import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardFormComponent } from './credit-card-form.component';

describe('CreditCardFormComponent', () => {
  let component: CreditCardFormComponent;
  let fixture: ComponentFixture<CreditCardFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditCardFormComponent]
    });
    fixture = TestBed.createComponent(CreditCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
