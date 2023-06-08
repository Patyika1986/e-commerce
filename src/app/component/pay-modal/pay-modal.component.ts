import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pay-modal',
  templateUrl: './pay-modal.component.html',
  styleUrls: ['./pay-modal.component.scss']
})
export class PayModalComponent {

  @Input({required:true}) modalTitle: string = '';
  @Input({required:true}) modalStatusText: string = '';
  @Output() modal:EventEmitter<Event> = new EventEmitter<Event>();

  closeModal(){
    this.modal.emit();
  }
}
