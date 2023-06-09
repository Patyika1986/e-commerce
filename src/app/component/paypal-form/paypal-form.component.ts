import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paypal-form',
  templateUrl: './paypal-form.component.html',
  styleUrls: ['./paypal-form.component.scss'],
})
export class PaypalFormComponent {
  @Input({ required: true }) modalTitle: string = '';
  @Input({ required: true }) modalStatusText: string = '';
  @Input({ required: true }) paypalForm: any;
  @Output() paypal: EventEmitter<Event> = new EventEmitter<Event>();

  payWithPayPal($event: Event) {
    this.paypal.emit($event);
  }
}
