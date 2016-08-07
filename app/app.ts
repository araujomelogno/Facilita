import { Component, ViewChild } from '@angular/core';
import { App, ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { Page1 } from './pages/page1/page1';
import { Page2 } from './pages/page2/page2';
import { LoginPage} from './pages/login/login'
import { InitPage} from './pages/init/init'
import { RegisterPage} from './pages/register/register'

import { HireServiceEditProfilePage} from './pages/hire-service-edit-profile/hire-service-edit-profile';
import { HireServiceHelpPage} from './pages/hire-service-help/hire-service-help';
import { HireServiceHomePage} from './pages/hire-service-home/hire-service-home';
import { HireServiceViewHiredServicesPage} from './pages/hire-service-view-hired-services/hire-service-view-hired-services';

import { OfferServiceEditProfilePage} from './pages/offer-service-edit-profile/offer-service-edit-profile'
import { OfferServiceHelpPage } from './pages/offer-service-help/offer-service-help';
import { OfferServiceHomePage} from './pages/offer-service-home/offer-service-home';
import { OfferServiceViewSchedulePage} from './pages/offer-service-view-schedule/offer-service-view-schedule';
import { OfferServiceViewWorksPage} from './pages/offer-service-view-works/offer-service-view-works';

import { UserProvider} from './providers/user-provider/user-provider';

@Component({
    templateUrl: 'build/app.html'

})
class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = LoginPage;

    hireServicePages: Array<{ title: string, component: any }>;
    offerServicePages: Array<{ title: string, component: any }>;

    constructor(private platform: Platform) {
        this.initializeApp();
        this.hireServicePages = [
            { title: 'Inicio', component: InitPage },
            { title: 'Contratar', component: HireServiceHomePage },
            { title: 'Serv. Contratados', component: HireServiceViewHiredServicesPage },
            { title: 'Perfil', component: HireServiceEditProfilePage },
            { title: 'Ayuda', component: HireServiceHelpPage }
        ];

        this.offerServicePages = [
            { title: 'Inicio', component: InitPage },
            { title: 'Pedidos', component: OfferServiceHomePage },
            { title: 'Agenda', component: OfferServiceViewSchedulePage },
            { title: 'Trabajos', component: OfferServiceViewWorksPage },
            { title: 'Perfil', component: OfferServiceEditProfilePage },
            { title: 'Ayuda', component: OfferServiceHelpPage }
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
ionicBootstrap(MyApp,[UserProvider]); 
