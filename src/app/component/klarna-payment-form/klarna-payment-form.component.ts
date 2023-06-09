import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-klarna-payment-form',
  templateUrl: './klarna-payment-form.component.html',
  styleUrls: ['./klarna-payment-form.component.scss'],
})
export class KlarnaPaymentFormComponent {
  @Input({ required: true }) modalTitle: string = '';
  @Input({ required: true }) modalStatusText: string = '';
  @Input({ required: true }) klarnaForms: any;
  @Output() klarna: EventEmitter<Event> = new EventEmitter<Event>();

  payWithKlarna($event: Event) {
    this.klarna.emit($event);
  }
}
