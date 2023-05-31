import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataFacadeStorage } from 'src/app/data-strore/data-facade-storage';
import { DataStoreService } from 'src/app/data-strore/data-store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(private dataStoreSevice: DataStoreService, private router: Router){}

  products:any[] = [];
  ngOnInit(): void {
    this.dataStoreSevice.getItems().subscribe(list => {
      for(const data of list){
        for(const items of data.product){
          this.products.push(items)
        }
      }
      console.log(this.products);
    });
    
  }

  addToBasket(item:any){
    console.log(item);
    this.dataStoreSevice.addToBasket(item).subscribe(list => {
      console.log(list,'lsit');
      
    })
    this.router.navigate(['basket']);
  }
}
