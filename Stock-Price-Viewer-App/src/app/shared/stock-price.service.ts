import { Injectable } from '../../../node_modules/@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable()
export class StockPriceService {
    constructor(private http: Http) {
    }
    public getStockDetailsByUserName(userName: String) {
   return this.http.get('http://localhost:8302/api/stock-service/rest/stock/' + userName);
   public getQuoteDetailsByName(userName: String) {
    return this.http.get('http://localhost:8302/api/db-service/rest/db/' + userName);
   }
}

