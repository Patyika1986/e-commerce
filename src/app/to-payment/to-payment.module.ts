import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ToPaymentComponent } from './to-payment/to-payment.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path:'', component: ToPaymentComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ToPaymentModule { }
