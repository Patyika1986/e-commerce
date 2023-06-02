import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'src/app/data-strore/data-store.service';

@Component({
  selector: 'app-to-payment',
  templateUrl: './to-payment.component.html',
  styleUrls: ['./to-payment.component.scss'],
})
export class ToPaymentComponent implements OnInit {
  constructor(
    private dataStoreService: DataStoreService,
    private http: HttpClient
  ) {}

  public cartItems: any[] = [];
  public total: number = 0;
  public price: number = 0;

  ngOnInit(): void {
    this.dataStoreService.getAllItemsFromCart().subscribe((list) => {
      list.map((data: any) => {
        data[0].price *= data[0].amount;
        this.cartItems.push(data[0]);
      });

      let allPrice: any[] = [];
      this.cartItems.map((totalPrice: any) => {
        allPrice.push(totalPrice.price);
      });
      allPrice.map((x) => (this.total += x));
      this.total.toFixed(2);
      console.log(this.total);
    });
  }

  itemToRemove(id: any) {
    this.dataStoreService.getAllItemsFromCart().subscribe((list) => {
      console.log(list[0].id);
      this.dataStoreService.removeItem(list[0].id).subscribe();
      if (list) {
        const del = this.cartItems.find((x) => x.id === id);
        for (const data of this.cartItems) {
          this.cartItems.splice(data, 1);
        }
      }
    });
  }

  clearAll() {
    return this.http
      .delete('https://e-commerce-294cd-default-rtdb.firebaseio.com/cart.json')
      .subscribe(() => {
        // this.cartItems = [];
      });
  }
}
