import { Component } from '@angular/core';
import { NavController ,MenuController} from 'ionic-angular';

/*
  Generated class for the HireServiceHelpPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/hire-service-help/hire-service-help.html',
})
export class HireServiceHelpPage {

  constructor(private menu: MenuController,private nav: NavController) {
    this.menu.enable(false, 'offerMenu');
    this.menu.enable(true, 'hireMenu');
  }

}
