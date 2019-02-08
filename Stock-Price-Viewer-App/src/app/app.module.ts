import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { QuoteComponent } from './quote/quote.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { StockPriceService } from './shared/stock-price.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [StockPriceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
