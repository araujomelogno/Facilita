import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HireServiceSearchResult} from '../../models/hire/HireServiceSearchResult.ts'
/*
  Generated class for the HireServiceSearchResultsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    templateUrl: 'build/pages/hire-service-search-results/hire-service-search-results.html',
})
export class HireServiceSearchResultsPage {
    result: HireServiceSearchResult[] = [];
    constructor(private nav: NavController) {
        let r1: HireServiceSearchResult = new HireServiceSearchResult();
        r1.title = "Empleada 1";
        r1.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur dignissim ligula, sit amet fermentum nisl viverra mollis. Fusce gravida nisl at lacus consequat pharetra. Aenean nec dolor massa. Sed.";
        r1.recommendationsQ = 12;
        r1.reviewsQ = 5;
        this.result.push(r1);

        let r2: HireServiceSearchResult = new HireServiceSearchResult();
        r2.title = "Empleada 2";
        r2.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur dignissim ligula, sit amet fermentum nisl viverra mollis. Fusce gravida nisl at lacus consequat pharetra. Aenean nec dolor massa. Sed.";
        r2.recommendationsQ = 8;
        r2.reviewsQ = 3;
        this.result.push(r2);

    }

}
