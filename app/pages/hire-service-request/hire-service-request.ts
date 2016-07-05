import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Page} from 'ionic-angular';
import { HireServiceRequestLocationPage} from '../hire-service-request-location/hire-service-request-location';
import { HireServiceSearchResultsPage } from '../hire-service-search-results/hire-service-search-results';
/*
  Generated class for the HireServiceRequestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    templateUrl: 'build/pages/hire-service-request/hire-service-request.html',
})
export class HireServiceRequestPage {
    map: any;
    timeInit: any;
    timeEnd: any;
    date: any;
    constructor(private nav: NavController) {

    }

    setLocation() {
        this.nav.push(HireServiceRequestLocationPage);
    }

    query(){
          this.nav.push(HireServiceSearchResultsPage);
    }

}
