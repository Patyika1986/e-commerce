import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataFacadeStorage } from 'src/app/data-strore/data-facade-storage';
import { DataStoreService } from 'src/app/data-strore/data-store.service';
import { ProductsInterface } from 'src/app/productsInterface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(
    public dataStoreSevice: DataStoreService,
    private router: Router,
    private dataStoreFacade: DataFacadeStorage
  ) {}

  public products: ProductsInterface[] = [];

  ngOnInit(): void {
    this.dataStoreSevice.getItems().subscribe((list) => {
      list.map((data: any) => {
        for (const listItems of data.product) {
          this.products.push(listItems);
        }
      });
    });
  }

  addToBasket(item: any) {
    this.dataStoreSevice.addToBasket(item).subscribe((list) => {
      this.router.navigate(['basket']);
    });
  }
}
