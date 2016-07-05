import { Component } from '@angular/core';
import { Loading, NavController } from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/hire-service-request-location/hire-service-request-location.html',
})
export class HireServiceRequestLocationPage {
    map: any;
    loading: any;
    constructor(private nav: NavController) {
        this.map = null;
        this.loading = Loading.create({
            content: "Cargando mapa...",
            duration: 3000,
            dismissOnPageChange: false
        });

        this.loadMap();
    }

    loadMap() {
        let options = { timeout: 10000, enableHighAccuracy: true };
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                let mapOptions = {
                    center: latLng,
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                }
                this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
                this.loading.dismiss();
            },
            (error) => {
                console.log(error);
            }, options

        );

        this.nav.present(this.loading);
    }
}
