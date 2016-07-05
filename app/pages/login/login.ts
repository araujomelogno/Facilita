import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HireServiceHomePage} from '../hire-service-home/hire-service-home';
import { OfferServiceHomePage} from '../offer-service-home/offer-service-home';
import { InitPage } from "../init/init";
import { RegisterPage} from "../register/register";

@Component({
    templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

    constructor(private nav: NavController) {

    }

    login() {
        this.nav.setRoot(InitPage);
    }
    register() {
        this.nav.push(RegisterPage);
    }
}
