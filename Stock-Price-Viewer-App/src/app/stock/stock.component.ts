import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { StockPriceService } from '../shared/stock-price.service';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
@Injectable()
export class StockComponent implements OnInit {
  userName: String;

  constructor(private stockPriceService: StockPriceService) { }

  ngOnInit() {
  }
  public getStockDetails() {
    console.log(this.userName);
    this.stockPriceService.getStockDetailsByUserName(this.userName)
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
