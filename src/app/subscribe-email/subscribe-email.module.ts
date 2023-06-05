import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeEmailComponent } from './subscribe-email/subscribe-email.component';
import { Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: SubscribeEmailComponent }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SubscribeEmailModule { }
