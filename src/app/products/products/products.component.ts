import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataFacadeStorage } from 'src/app/data-strore/data-facade-storage';
import { DataStoreService } from 'src/app/data-strore/data-store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(
    public dataStoreSevice: DataStoreService,
    private router: Router
  ) {}

  products: any[] = [];
  ngOnInit(): void {
    this.loadBasketItems();
  }

  loadBasketItems() {
    this.dataStoreSevice.getItems().subscribe((list) => {
      for (const data of list) {
        for (const items of data.product) {
          this.products.push(items);
        }
      }
    });
  }

  addToBasket(item: any) {
    this.dataStoreSevice.addToBasket(item).subscribe((list) => {
      this.router.navigate(['basket']);
    });
  }
}
