import { Component } from '@angular/core';
import { NavController ,MenuController} from 'ionic-angular';

/*
  Generated class for the OfferServiceHelpPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/offer-service-help/offer-service-help.html',
})
export class OfferServiceHelpPage {

  constructor(private nav: NavController, private menu:MenuController) {
    this.menu.enable(true, 'offerMenu');
    this.menu.enable(false, 'hireMenu');
  }

}
