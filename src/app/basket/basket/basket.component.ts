import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DataFacadeStorage } from 'src/app/data-strore/data-facade-storage';
import { DataStoreService } from 'src/app/data-strore/data-store.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  constructor(
    public dataStoregeService: DataStoreService,
    public dataFacadeStorage: DataFacadeStorage
  ) {}

  public items: any[] = [];
  public sizes: any[] = [];
  public itemCount: number = 0;
  public selectedelement: any;

  ngOnInit(): void {
    this.loadBasketItems();
  }

  loadBasketItems(){
    this.dataFacadeStorage.getItemsFromBasket();
    this.dataFacadeStorage.basket$.subscribe((list) => {
      this.items = list;
      for (const size of this.items) {
        this.sizes = size.sizes;
      }
    });
  }

  selectSize(size: any) {
    this.selectedelement = size;
    console.log(size);
  }

  addToCart(product: any) {
    console.log(product);
  }

  increment() {
    this.itemCount += 1;
    // this.dataFacadeStorage.cartItems.update((count) => (count += 1));
  }

  decrease() {
    this.itemCount -= 1;

    // this.dataFacadeStorage.cartItems.update((count) => (count -= 1));
  }
}
