import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}

  async ngOnInit() {
    const initialgeolocationPermisionStatus = await Geolocation.checkPermissions();
    console.log(`initialgeolocationPermisionStatus.location: ${initialgeolocationPermisionStatus.location}`);

    try {
      await Geolocation.getCurrentPosition({
        maximumAge: 999999999, // We are okay with a cached response
        enableHighAccuracy: false, // No need for high accuracy, just want a response
        // Default timeout is left at 10000 to give it 10s to come back, just in case it is slow for some reason
      });

      console.log('Location found!');
    } catch (e) {
      console.log(`Error getting location: ${e}`);
    } finally {
      const afterGeolocationPermisionStatus = await Geolocation.checkPermissions();
      console.log(`afterGeolocationPermisionStatus.location: ${afterGeolocationPermisionStatus.location}`);
    }
  }
}
