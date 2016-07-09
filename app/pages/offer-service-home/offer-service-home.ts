import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/offer-service-home/offer-service-home.html',
})
export class OfferServiceHomePage {
  map: any;
  mapInitialised: any = false;
  apiKey: any;

  constructor(private nav: NavController, private menu: MenuController) {
    this.menu.enable(true, 'offerMenu');
    this.menu.enable(false, 'hireMenu');
  }


}
