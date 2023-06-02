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

  ngOnInit(): void {
    this.dataStoreService.getAllItemsFromCart().subscribe(items => {
      this.cartItem = items.length;
    })

  }
  toggleBadgeVisibility() {
    this.router.navigate(['basket']);
  }
}
