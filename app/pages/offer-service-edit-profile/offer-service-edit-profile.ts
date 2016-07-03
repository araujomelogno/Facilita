import { Component } from '@angular/core';
import { NavController,MenuController } from 'ionic-angular';

/*
  Generated class for the OfferServiceEditProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/offer-service-edit-profile/offer-service-edit-profile.html',
})
export class OfferServiceEditProfilePage {

  constructor(private nav: NavController, private menu:MenuController) {
    this.menu.enable(true, 'offerMenu');
    this.menu.enable(false, 'hireMenu');
  }

}
