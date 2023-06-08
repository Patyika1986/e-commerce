import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.scss']
})
export class CreditCardFormComponent {

  @Input({required:true}) modalTitle: string = '';
  @Input({required:true}) modalStatusText: string = '';
  @Input({required:true}) creditForm:any;
  @Input({required:true}) totalPrice:number = 0;
  @Output() creditCard:EventEmitter<Event> = new EventEmitter<Event>();

  payWithCreditCard($event:Event) {
    this.creditCard.emit($event);
  }
}
