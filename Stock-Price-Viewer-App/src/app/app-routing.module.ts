import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '../../node_modules/@angular/core';
import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { QuoteComponent } from './quote/quote.component';

const appRoutes: Routes = [
    {path : 'stock', component : StockComponent},
    {path : 'quote', component : QuoteComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})


export class AppRoutingModule{}
