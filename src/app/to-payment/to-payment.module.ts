import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ToPaymentComponent } from './to-payment/to-payment.component';


const routes: Routes = [
  { path:'', component: ToPaymentComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ToPaymentModule { }
