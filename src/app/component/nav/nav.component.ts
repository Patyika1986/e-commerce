import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataFacadeStorage } from 'src/app/data-strore/data-facade-storage';
import { DataStoreService } from 'src/app/data-strore/data-store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(
    public dataFacadeStorage: DataFacadeStorage,
    private dataStoreService: DataStoreService,
    private router: Router
  ) {}
  cartItem = 0;

  ngOnInit(): void {

  }
  toggleBadgeVisibility() {
    this.router.navigate(['basket'])
  }
}
