import { Component, OnInit, Injectable } from '@angular/core';
import { StockPriceService } from '../shared/stock-price.service';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  userName: String;

  constructor(private stockPriceService: StockPriceService) { }

  ngOnInit() {
  }
  public getQuoteDetails() {
    console.log(this.userName);
    this.stockPriceService.getQuoteDetailsByName(this.userName)
    .pipe(map(
      (response: Response) => {
        const object: any[] = response.json();
        return object;
      }
    ))
    .subscribe(
      (object: Object[]) => {
        console.log(object);
      }
    );
    this.userName = '';

  }
}
