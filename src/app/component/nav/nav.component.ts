import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStoreService } from 'src/app/data-strore/data-store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(
    public dataStoreService: DataStoreService,
    private router: Router
  ) {}

  cartItem = 0;
  dataItems: any;
  item: any;

  findItem: any[] = [];

  ngOnInit(): void {
    this.dataStoreService.getAllItemsFromCart().subscribe((items) => {
      this.cartItem = items.length;
    });
  }

  addToBasket(item: any) {
    this.dataStoreService.addToBasket(item).subscribe((list) => {
      this.router.navigate(['basket']);
    });
  }

  searchItem(item: any) {
    let search = item.value.toLowerCase();

    this.dataStoreService.getItems().subscribe((list) => {
      list.map((data: any) => {
        this.dataItems = data.product;
        const res = data.product.filter((obj: any) =>
          obj.name.toLowerCase().includes(search)
        );
        this.findItem = res;
      });
    });
  }

  toggleBadgeVisibility() {
    this.router.navigate(['basket']);
  }
}
