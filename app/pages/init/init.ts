import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HireServiceHomePage } from '../hire-service-home/hire-service-home';
import { OfferServiceHomePage } from '../offer-service-home/offer-service-home';
/*
  Generated class for the InitPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    templateUrl: 'build/pages/init/init.html',
})
export class InitPage {

    constructor(private nav: NavController) {

    }

    hire() {
        this.nav.setRoot(HireServiceHomePage);
    }
    offer() {
        this.nav.setRoot(OfferServiceHomePage);
    }
}
