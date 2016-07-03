import { Component } from '@angular/core';
import { NavController,MenuController } from 'ionic-angular';

/*
  Generated class for the HireServiceViewHiredServicesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/hire-service-view-hired-services/hire-service-view-hired-services.html',
})
export class HireServiceViewHiredServicesPage {

  constructor(private nav: NavController, private menu:MenuController) {
    this.menu.enable(false, 'offerMenu');
    this.menu.enable(true, 'hireMenu');
  }

}
