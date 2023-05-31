import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataFacadeStorage } from 'src/app/data-strore/data-facade-storage';
import { DataStoreService } from 'src/app/data-strore/data-store.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit, OnChanges {
  constructor(
    private dataStoregeService: DataStoreService,
    public dataFacadeStorage: DataFacadeStorage
  ) {}

  items: any[] = [];
  sizes: any[] = [];
  ngOnInit(): void {
   this.loadItems();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes,'changes');
    
this.loadItems();
  }


  loadItems(){
    this.dataStoregeService.getItemsFromBasket().subscribe((items) => {
      this.items = items;
      for (const size of this.items) {
        this.sizes = size.sizes;
        console.log(size);
      }
    });
  }

  selectSize(size: any) {
    console.log(size);
  }

  increment() {
    this.dataFacadeStorage.cartItems.update((count) => (count += 1));
  }

  decrease() {
    this.dataFacadeStorage.cartItems.update((count) => (count -= 1));
  }
}
