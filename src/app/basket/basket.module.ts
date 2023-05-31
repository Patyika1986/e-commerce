import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket/basket.component';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from '../component/nav/nav.component';

const routes: Routes = [{ path: '', component: BasketComponent }];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ],
})
export class BasketModule {}
