import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './component/nav/nav.component';
import { OverviewComponent } from './component/overview/overview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { GaleryComponent } from './component/galery/galery.component';
import { ProductsComponent } from './products/products/products.component';
import { RouterModule } from '@angular/router';
import { BasketComponent } from './basket/basket/basket.component';
import { ToPaymentComponent } from './to-payment/to-payment/to-payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubscribeEmailComponent } from './subscribe-email/subscribe-email/subscribe-email.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './login/login/login.component';
import { RegistFormularComponent } from './login/regist-formular/regist-formular.component';
import { PaymentOverviewComponent } from './component/payment-overview/payment-overview.component';
import { KlarnaPaymentFormComponent } from './component/klarna-payment-form/klarna-payment-form.component';
import { CreditCardFormComponent } from './component/credit-card-form/credit-card-form.component';
import { PaypalFormComponent } from './component/paypal-form/paypal-form.component';
import { PayModalComponent } from './component/pay-modal/pay-modal.component';
import { OrderListComponent } from './component/order-list/order-list.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    OverviewComponent,
    GaleryComponent,
    ProductsComponent,
    BasketComponent,
    ToPaymentComponent,
    SubscribeEmailComponent,
    FooterComponent,
    LoginComponent,
    RegistFormularComponent,
    PaymentOverviewComponent,
    KlarnaPaymentFormComponent,
    CreditCardFormComponent,
    PaypalFormComponent,
    PayModalComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
