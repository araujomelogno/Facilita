import { Component } from '@angular/core';
import { NavController,MenuController } from 'ionic-angular';
import { UserProvider } from '../../providers/user-provider/user-provider';

/*
  Generated class for the HireServiceEditProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/hire-service-edit-profile/hire-service-edit-profile.html',
  providers: [UserProvider]
})
export class HireServiceEditProfilePage {
  constructor(private nav: NavController, private menu:MenuController, private userProvider:UserProvider) {
    this.menu.enable(false, 'offerMenu');
    this.menu.enable(true, 'hireMenu');
  }

}
