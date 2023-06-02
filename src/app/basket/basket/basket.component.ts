import { Component, OnInit } from '@angular/core';
import { DataFacadeStorage } from 'src/app/data-strore/data-facade-storage';
import { DataStoreService } from 'src/app/data-strore/data-store.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  constructor(
    public dataStoregeService: DataStoreService,
    public dataFacadeStorage: DataFacadeStorage,
    private router: Router
  ) {}

  public items: any[] = [];
  public sizes: any[] = [];
  public itemCount: number = 0;
  public selectedelement: any;
  public subscribtion$ = new Subject();

  public cartItems: any[] = [
    {
      amount: 0,
      deliveryTime: 0,
      id: '',
      img: '',
      isSale: false,
      name: '',
      pieces: 0,
      price: 0,
      sizes: [0],
    },
  ];

  ngOnInit(): void {
    this.dataStoregeService.getItemsFromBasket().subscribe((list) => {
      list.map((data: any) => {
        this.sizes = data.sizes;
        this.items.push(data);
      });
    });
  }

  selectSize(size: any, item: any) {
    this.selectedelement = size;
    const itemData = this.dataStoregeService
      .getItemsFromBasket()
      .subscribe((list) => {
        const thisItem = list.find((listItem: any) => listItem.id === item.id);
        if (thisItem) {
          this.dataStoregeService
            .updateItem(item.id, item)
            .subscribe((list) => {
              list.sizes = [];
              list.sizes.push(size);
              for (const datas of this.cartItems) {
                datas.sizes = list.sizes;
              }
            });
        }
      });
  }

  increment(item: any) {
    this.itemCount += 1;
    const countItem = this.dataStoregeService
      .getItemsFromBasket()
      .subscribe((list) => {
        const datas = list.find((listItem: any) => listItem.id === item.id);
        if (datas) {
          this.dataStoregeService
            .updateItem(item.id, item)
            .subscribe((listdata) => {
              listdata.amount = this.itemCount;
              for (const datas of this.cartItems) {
                datas.amount = listdata.amount;
              }
            });
        }
      });
  }

  decrease(item: any) {
    this.itemCount -= 1;
    this.dataStoregeService.getItemsFromBasket().subscribe((list) => {
      const data = list.find((id: any) => id.id === item.id);
      if (data) {
        this.dataStoregeService.updateItem(item.id, item).subscribe((list) => {
          list.amount = this.itemCount;
          for (const datas of this.cartItems) {
            datas.amount = list.amount;
          }
        });
      }
    });
  }

  addToCart(product: any) {
    this.dataStoregeService.getItemsFromBasket().subscribe((list) => {
      const data = list.find((item: any) => item.id === product.id);
      if (data) {
        this.dataStoregeService
          .updateItem(product.id, product)
          .subscribe((liste) => {
            for (const datas of this.cartItems) {
              datas.deliveryTime = product.deliveryTime;
              datas.id = product.id;
              datas.img = product.img;
              datas.isSale = product.isSale;
              datas.name = product.name;
              datas.pieces = product.pieces;
              datas.price = product.price;
            }
            this.dataStoregeService
              .addToCart(this.cartItems)
              .subscribe((list) => {});
          });
      }
    });
  }

  navigationToPamyment(){
    this.router.navigate(['to-payment']);
  }
}
