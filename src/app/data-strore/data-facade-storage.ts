import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { DataStoreService } from './data-store.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductsInterface } from '../productsInterface';

@Injectable({
  providedIn: 'root',
})
export class DataFacadeStorage {
  constructor(
    private dataStoreService: DataStoreService,
    private http: HttpClient
  ) {}

  private _getItems$ = new BehaviorSubject<any>([]);
  public getItems$: Observable<any> = this._getItems$.asObservable();

  private _products$ = new BehaviorSubject<any>([]);
  public products$: Observable<any> = this._products$.asObservable();

  private _basketItems$ = new BehaviorSubject<any>([]);
  public basketItems$: Observable<any> = this._basketItems$.asObservable();

  private _editItem$ = new BehaviorSubject<any>([]);
  public editItem$: Observable<any> = this._editItem$.asObservable();

  private _adtobasket$ = new BehaviorSubject<any>([]);
  public adtobasket$: Observable<any> = this._adtobasket$.asObservable();

  private subscribtions$ = new Subject();

  getItems(): void {
    this.dataStoreService
      .getItems()
      .pipe(takeUntil(this.subscribtions$))
      .subscribe((allItems) => {
        this._getItems$.next(allItems);
      });
  }

  addToBasket(item: ProductsInterface[]): void {
    this.dataStoreService
      .addToBasket(item)
      .pipe(takeUntil(this.subscribtions$))
      .subscribe((itemData) => {
        this._adtobasket$.next(itemData);
      });
  }

  getItemsFromBasket(): void {
    this.dataStoreService
      .getItemsFromBasket()
      .pipe(takeUntil(this.subscribtions$))
      .subscribe((itemData) => {
        this._basketItems$.next(itemData);
      });
  }

  // addItem(item:any): void {
  //   this.dataStoreService.postProduct(item).pipe(takeUntil(this.subscribtions$)).subscribe(itemData => {
  //       this._products$.next(itemData);
  //   });
  // }

  // editItem(id:any,data:any):void{
  //   this.dataStoreService.updateItem(id,data).pipe(takeUntil(this.subscribtions$)).subscribe(list => {
  //     this._editItem$.next(list);
  //   });
  // }
}
