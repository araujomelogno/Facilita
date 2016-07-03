import { Component } from '@angular/core';
import { NavController,MenuController } from 'ionic-angular';

/*
  Generated class for the OfferServiceViewWorksPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/offer-service-view-works/offer-service-view-works.html',
})
export class OfferServiceViewWorksPage {

  constructor(private nav: NavController, private menu:MenuController) {
    this.menu.enable(true, 'offerMenu');
    this.menu.enable(false, 'hireMenu');
  }
}
