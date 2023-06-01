import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { DataFacadeStorage } from 'src/app/data-strore/data-facade-storage';
import { DataStoreService } from 'src/app/data-strore/data-store.service';
import { Subject, map, takeUntil } from 'rxjs';

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
  public subscribtion$ = new Subject();
  ngOnInit(): void {
    // this.dataFacadeStorage.getItemsFromBasket();
    // this.dataFacadeStorage.basketItems$.pipe(takeUntil(this.subscribtion$)).subscribe(allBasketItems => {
    //   console.log(allBasketItems);
    //   this.items = allBasketItems;
    // })
    this.dataStoregeService.getItemsFromBasket().subscribe((list) => {
      list.map((data: any) => {
        this.sizes = data.sizes;
        this.items.push(data);
      });
    });
  }

  loadBasketItems() {
    // this.dataFacadeStorage.getItemsFromBasket();
    // this.dataFacadeStorage.basket$.subscribe((list) => {
    //   this.items = list;
    //   for (const size of this.items) {
    //     this.sizes = size.sizes;
    //   }
    // });
  }

  selectSize(size: any) {
    this.selectedelement = size;
    console.log(size);
  }

  addToCart(product: any) {
    console.log(product);
  }

  increment(item: any) {
    this.itemCount += 1;

    // for(const amount of this.items){
    //   amount.amount = this.itemCount;
    //   this.dataFacadeStorage.editItem(amount.id,amount)
    //   this.dataFacadeStorage.editItem$.subscribe(list => {
    //     list.amount = this.itemCount;
    //     console.log(list,'from subscribe');

    //   })
    // }
    // console.log(this.items,'items');
  }

  decrease() {
    if (this.itemCount > 1) {
      this.itemCount -= 1;
    } else {
      this.itemCount = 0;
    }
  }

  //   ngOnDestroy(): void {
  //     this.subscribtion$.next(false);
  //     this.subscribtion$.complete();
  // }
}
