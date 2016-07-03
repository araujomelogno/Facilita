import { Component } from '@angular/core';
import { NavController ,MenuController} from 'ionic-angular';

/*
  Generated class for the OfferServiceHomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/offer-service-home/offer-service-home.html',
})
export class OfferServiceHomePage {

  constructor(private nav: NavController, private menu:MenuController) {
    this.menu.enable(true, 'offerMenu');
    this.menu.enable(false, 'hireMenu');
  }

}
