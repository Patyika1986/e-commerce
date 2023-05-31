import { Component } from '@angular/core';
import { DataFacadeStorage } from 'src/app/data-strore/data-facade-storage';
import { DataStoreService } from 'src/app/data-strore/data-store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(private dataStoreSevice: DataStoreService){}

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
    
  }
}
