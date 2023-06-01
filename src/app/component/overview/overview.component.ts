import { Component, OnInit } from '@angular/core';
import { DataFacadeStorage } from 'src/app/data-strore/data-facade-storage';
import { DataStoreService } from 'src/app/data-strore/data-store.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit{
  constructor(private dataFacadeStorage: DataFacadeStorage, private dataStoreSevice: DataStoreService){}

  products:object[] = [];
  ngOnInit(): void {
    this.dataStoreSevice.getItems().subscribe(list => {
      for(const data of list){
        for(const items of data.product){
          //this.dataStoreSevice.products.update(item => item = items)
          this.products.push(items)
        }
      }
      console.log(this.products);
    });
    
  }

  postProducts(){
   const data =  {
      "product": [
          {
              "id": 1,
              "name": "Nike Air Max Pluse",
              "price": 160,
              "pieces": 35,
              "img": "assets/image/product-1.webp",
              "sizes": [
                  40,
                  41,
                  42,
                  43,
                  44,
                  45,
                  46
              ],
              "deliveryTime": 1,
              "amount": [],
              "isSale": false
          },
          {
              "id": 2,
              "name": "Nike Air Force Herren",
              "price": 120,
              "pieces": 25,
              "img": "assets/image/product-2.webp",
              "sizes": [
                  40,
                  41,
                  42,
                  43,
                  44,
                  45,
                  46
              ],
              "deliveryTime": 1,
              "amount": [],
              "isSale": false
          },
          {
              "id": 3,
              "name": "Nike Dunk Low",
              "price": 120,
              "pieces": 29,
              "img": "assets/image/product-3.webp",
              "sizes": [
                  40,
                  41,
                  42,
                  43,
                  44,
                  45,
                  46
              ],
              "deliveryTime": 2,
              "amount": [],
              "isSale": false
          },
          {
              "id": 3,
              "name": "Nike Air Max Pulse",
              "price": 160,
              "pieces": 29,
              "img": "assets/image/product-4.webp",
              "sizes": [
                  40,
                  41,
                  42,
                  43,
                  44,
                  45,
                  46
              ],
              "deliveryTime": 2,
              "amount": [],
              "isSale": false
          },
          {
            "id": 4,
            "name": "Nike Air Max 270",
            "price": 160,
            "pieces": 29,
            "img": "assets/image/product-5.webp",
            "sizes": [
                40,
                41,
                42,
                43,
                44,
                45,
                46
            ],
            "deliveryTime": 1,
            "amount": [],
            "isSale": false
        },
        {
          "id": 5,
          "name": "Nike Air Force 1Low",
          "price": 130,
          "pieces": 12,
          "img": "assets/image/product-6.webp",
          "sizes": [
              40,
              41,
              42,
              43,
              44,
              45,
              46
          ],
          "deliveryTime": 1,
          "amount": [],
          "isSale": false
      },
      {
        "id": 6,
        "name": "Nike Air Force 1Low",
        "price": 130,
        "pieces": 12,
        "img": "assets/image/product-7.webp",
        "sizes": [
            40,
            41,
            42,
            43,
            44,
            45,
            46
        ],
        "deliveryTime": 2,
        "amount": [],
        "isSale": false
    },
    {
      "id": 7,
      "name": "Nike Air Max 90",
      "price": 160,
      "pieces": 12,
      "img": "assets/image/product-8.webp",
      "sizes": [
          40,
          41,
          42,
          43,
          44,
          45,
          46
      ],
      "deliveryTime": 1,
      "amount": [],
      "isSale": false
  },
  {
    "id": 8,
    "name": "Nike Air Max 90",
    "price": 160,
    "pieces": 12,
    "img": "assets/image/product-8.webp",
    "sizes": [
        40,
        41,
        42,
        43,
        44,
        45,
        46
    ],
    "deliveryTime": 1,
    "amount": [],
    "isSale": false
},
{
  "id": 9,
  "name": "Jordan Air 1Low",
  "price": 140,
  "pieces": 12,
  "img": "assets/image/product-9.webp",
  "sizes": [
      40,
      41,
      42,
      43,
      44,
      45,
      46
  ],
  "deliveryTime": 1,
  "amount": [],
  "isSale": false
},
{
  "id": 10,
  "name": "Nike Air Max 97 Icons",
  "price": 190,
  "pieces": 32,
  "img": "assets/image/product-10.webp",
  "sizes": [
      40,
      41,
      42,
      43,
      44,
      45,
      46
  ],
  "deliveryTime": 2,
  "amount": [],
  "isSale": false
},
      ]
  }
    this.dataStoreSevice.addToBasket(data).subscribe(list => {
      console.log(list);
      
    });

  }
}
