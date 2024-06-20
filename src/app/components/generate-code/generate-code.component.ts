import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-code',
  templateUrl: './generate-code.component.html',
  styleUrls: ['./generate-code.component.scss'],
})
export class GenerateCodeComponent  implements OnInit {

  public code: string = '000000';

  constructor() { }

  ngOnInit() {}

  public generateCode() {
    console.log('Button clicked: ' + this.code);
    const newCode = '123456';
    this.code = newCode;
  }
}
