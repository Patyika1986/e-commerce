import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './component/nav/nav.component';
import { OverviewComponent } from './component/overview/overview.component';

const routes: Routes = [
  { path: 'overview',component: OverviewComponent},
  { path: '',redirectTo:'overview',pathMatch:'full'},
  { path: '', component: NavComponent},
  {
    path: 'data-store',
    loadChildren: () =>
      import('./data-strore/data-strore.module').then(
        (dataStore) => dataStore.DataStroreModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
