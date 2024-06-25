import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-code',
  templateUrl: './generate-code.component.html',
  styleUrls: ['./generate-code.component.scss'],
})
export class GenerateCodeComponent  implements OnInit, OnChanges, OnDestroy {

  public code: string = '000000';
  public isButtonEnabled = true;
  public buttonLabel = 'Generate';

  constructor() {
    console.log('constructor');
   }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  public generateButtonClicked() {
    console.log('Button clicked: ' + this.code);
    this.isButtonEnabled = false;
    const newCode = this.generateRandomCode();
    this.code = `${newCode}`;

    let count = 5;

    const intervalId = setInterval(() => {
      this.buttonLabel = `${count}`;
      if (count === 1) {
        this.isButtonEnabled = true;
        this.buttonLabel = 'Generate';
        clearInterval(intervalId);
      }
      count--;
    }, 1000);
  }

  private generateRandomCode() : number {
    const min = 100000;
    const max = 999999;

    return Math.floor(Math.random()*(max-min + 1) + min);
  }
}
