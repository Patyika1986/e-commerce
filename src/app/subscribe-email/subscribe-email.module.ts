import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeEmailComponent } from './subscribe-email/subscribe-email.component';
import { Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: SubscribeEmailComponent }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SubscribeEmailModule { }
