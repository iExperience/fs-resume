import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public myDateOfBirth: String;

  ionViewDidEnter() {
    this.myDateOfBirth = "1994-10-03";
  }

  pressMe() {
    alert("Hi!!");
  }
}
