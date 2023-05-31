import { Component } from '@angular/core';
import { DataFacadeStorage } from 'src/app/data-strore/data-facade-storage';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  constructor(public dataFacadeStorage: DataFacadeStorage) {}
  cartItem = 0;

  toggleBadgeVisibility() {
    this.dataFacadeStorage.cartItems.update((count) => count + 1);
    this.cartItem = this.dataFacadeStorage.cartItems();
  }
}
