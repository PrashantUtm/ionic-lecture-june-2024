import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public email = 'ppp@gmail.com';

  constructor() { }

  ngOnInit() {
  }

  public toggleChanged() : void {
    console.log(this.email);
  }

}
