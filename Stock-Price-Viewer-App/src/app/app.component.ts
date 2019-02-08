import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stock-viewer-app';
  constructor(private router: Router ,
    private route: ActivatedRoute) {

  }

 public  onClickGetStockDetails() {
  this.router.navigate(['stock']);
}

public  onClickGetQuoteDetails() {
  this.router.navigate(['quote']);
}


}
