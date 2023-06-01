import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { DataStoreService } from './data-store.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataFacadeStorage {
  constructor(
    private dataStoreService: DataStoreService,
    private http: HttpClient
  ) {}

  private _products$ = new BehaviorSubject<[]>([]);
  public products$: Observable<[]> = this._products$.asObservable();

  private _basket$ = new BehaviorSubject<[]>([]);
  public basket$: Observable<[]> = this._basket$.asObservable();

  public cartItems = signal(0);

 private subscribtions$ = new Subject();

  addItem(item:any): void {
    this.dataStoreService.postProduct(item).pipe(takeUntil(this.subscribtions$)).subscribe(itemData => {
        this._products$.next(itemData);
    });
  }

  getItemsFromBasket(): void {
    this.dataStoreService.getItemsFromBasket().pipe(takeUntil(this.subscribtions$)).subscribe(itemData => {
        this._basket$.next(itemData);
    });
  }



}
