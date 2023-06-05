import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './component/nav/nav.component';
import { OverviewComponent } from './component/overview/overview.component';
import { BasketComponent } from './basket/basket/basket.component';
import { ToPaymentComponent } from './to-payment/to-payment/to-payment.component';

const routes: Routes = [
  { path: 'overview',component: OverviewComponent},
  { path: 'basket', component:BasketComponent },
  { path: 'to-payment', component:ToPaymentComponent },

  { path: '',redirectTo:'overview',pathMatch:'full'},
  { path: '', component: NavComponent},
  {
    path: 'data-store',
    loadChildren: () =>
      import('./data-strore/data-strore.module').then(
        (dataStore) => dataStore.DataStroreModule
      ),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then(
        (products) => products.ProductsModule
      ),
  },
  {
    path: 'basket',
    loadChildren: () =>
      import('./basket/basket.module').then(
        (basket) => basket.BasketModule
      ),
  },
  {
    path: 'to-payment',
    loadChildren: () =>
      import('./to-payment/to-payment.module').then(
        (toPaymant) => toPaymant.ToPaymentModule
      ),
  },
  {
    path: 'sub-email',
    loadChildren: () =>
      import('./subscribe-email/subscribe-email.module').then(
        (subEmail) => subEmail.SubscribeEmailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
