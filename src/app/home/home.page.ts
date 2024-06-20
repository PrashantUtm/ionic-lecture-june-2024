import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor() {}

  public executeCode() : void {
    this.showProduct(2, 3);

    console.log(this.getNumber(false));
    console.log(5/0);
    console.log(-5/0);
  }

  private showProduct(first: number, second: number) : void {
    console.log(`The product is: ${first * second}`);
  }

  private getNumber(x: boolean) : number {
    if (x) {
      return 5;
    } else {
      return NaN;
    }
  }
}


