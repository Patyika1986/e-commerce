import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'src/app/data-strore/data-store.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-payment',
  templateUrl: './to-payment.component.html',
  styleUrls: ['./to-payment.component.scss'],
})
export class ToPaymentComponent implements OnInit {
  constructor(
    private dataStoreService: DataStoreService,
    private http: HttpClient,
    private route: Router
  ) {}

  public cartItems: any[] = [];
  public total: number = 0;
  public price: number = 0;
  public item:any;

  ngOnInit(): void {
    this.dataStoreService.getAllItemsFromCart().subscribe((list) => {
      console.log(list);
      
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
    });
  }

  itemToRemove(id:any) {
    this.dataStoreService.getAllItemsFromCart().subscribe(list => {
      this.dataStoreService.removeItem(list[0].id).subscribe();
      const element = this.cartItems.find(item => item.id === id.id);
      this.cartItems.splice(element,1)
    });
  }

  clearAll() {
    return this.http
      .delete('https://e-commerce-294cd-default-rtdb.firebaseio.com/cart.json')
      .subscribe(() => {
        this.cartItems = [];
      });
  }

  navigateToLogin(){    
    if(window.localStorage.getItem('userIsLoged')){
      this.route.navigate(['payment-overview']);
    }else {
      this.route.navigate(['login']);
    }
  }
}
