import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './component/nav/nav.component';
import { OverviewComponent } from './component/overview/overview.component';
import { BasketComponent } from './basket/basket/basket.component';

const routes: Routes = [
  { path: 'overview',component: OverviewComponent},
  { path: 'basket', component:BasketComponent },

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
