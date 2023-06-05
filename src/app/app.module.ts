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
    FooterComponent
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
