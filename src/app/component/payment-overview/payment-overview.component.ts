import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataStoreService } from 'src/app/data-strore/data-store.service';

@Component({
  selector: 'app-payment-overview',
  templateUrl: './payment-overview.component.html',
  styleUrls: ['./payment-overview.component.scss'],
})
export class PaymentOverviewComponent implements OnInit {
  constructor(
    private formbuilder: FormBuilder,
    private dataStroreService: DataStoreService
  ) {}

  public payPalForm = this.formbuilder.group({
    paypalEmail: [
      '',
      Validators.compose([
        Validators.required,
        Validators.email,
        Validators.minLength(7),
        Validators.maxLength(35),
      ]),
    ],
    paypalPassword: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
      ]),
    ],
  });

  public creditCardForm = this.formbuilder.group({
    cardName: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(35),
      ]),
    ],
    cardNumber: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16),
      ]),
    ],
    monthYear: ['', Validators.required],
    cvc: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3),
      ]),
    ],
  });

  public klarnaForm = this.formbuilder.group({
    klarnaEmail: [
      '',
      Validators.compose([
        Validators.required,
        Validators.email,
        Validators.minLength(7),
        Validators.maxLength(35),
      ]),
    ],
    klarnaPassword: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
      ]),
    ],
  });

  public paymentMethod = ['PayPal', 'Klarna', 'Credit-Card'];

  public payPal: boolean = true;
  public klarna: boolean = false;
  public creditCard: boolean = false;

  public modalTitle: string = '';
  public modalStatusText: string = '';
  public totalPrice: number = 0;

  public cardItems: any[] = [];

  ngOnInit(): void {
    this.dataStroreService.getAllItemsFromCart().subscribe((items) => {
      console.log(items);
      items.map((dataList: any) => {
        this.cardItems.push(dataList[0]);
      });
    });
  }

  selectPayment(event: any) {
    switch (event.target.value) {
      case 'PayPal':
        this.payPal = true;
        this.klarna = false;
        this.creditCard = false;
        break;
      case 'Klarna':
        this.payPal = false;
        this.klarna = true;
        this.creditCard = false;
        break;
      case 'Credit-Card':
        const price: any[] = [];
        this.dataStroreService.getAllItemsFromCart().subscribe((list) => {
          list.map((data: any) => {
            price.push(data[0].price);
          });
          price.map((x: any) => (this.totalPrice += x));
          this.totalPrice.toFixed(2);
        });
        this.payPal = false;
        this.klarna = false;
        this.creditCard = true;
        break;

      default:
        this.payPal = false;
        this.klarna = false;
        this.creditCard = false;
        break;
    }
  }

  payWithPayPal($event: Event) {
    if (this.payPalForm.status === 'VALID') {
      this.modalTitle = 'Pay with PayPal';
      this.modalStatusText = 'Was Successfully';
    } else {
      this.modalTitle = 'Pay with PayPal';
      this.modalStatusText = 'Was not successful something went wrong !';
    }
  }

  payWithKlarna($event: Event) {
    if (this.klarnaForm.status === 'VALID') {
      this.modalTitle = 'Pay with Klarna';
      this.modalStatusText = 'Was Successfully';
    } else {
      this.modalTitle = 'Pay with Klarna';
      this.modalStatusText = 'Was not successful something went wrong !';
    }
  }

  payWithCreditCard() {
    console.log(this.creditCardForm);

    if (this.creditCardForm.status === 'VALID') {
      this.modalTitle = 'Pay with your Credit Card';
      this.modalStatusText = 'Was Successfully';
    } else {
      this.modalTitle = 'Pay with your Credit Card';
      this.modalStatusText = 'Was not successful something went wrong !';
    }
  }

  closeModal() {
    this.payPalForm.reset();
    this.klarnaForm.reset();
    this.creditCardForm.reset();
  }
}
