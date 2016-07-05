import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { HireServiceRequestPage}  from '../hire-service-request/hire-service-request';
/*
  Generated class for the HireServiceHomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    templateUrl: 'build/pages/hire-service-home/hire-service-home.html',
})
export class HireServiceHomePage {

    constructor(private nav: NavController, private menu: MenuController) {
        this.menu.enable(false, 'offerMenu');
        this.menu.enable(true, 'hireMenu');
    }

    hire() {
        
        this.nav.push(HireServiceRequestPage);
    }

}
