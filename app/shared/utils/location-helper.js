import { Geolocation } from '@nativescript/geolocation';

export class LocationHelper {
  static async getCurrentLocation() {
    const hasPermission = await Geolocation.enableLocationRequest();
    if (!hasPermission) {
      throw new Error('Location permission denied');
    }

    return await Geolocation.getCurrentLocation({
      desiredAccuracy: 3,
      maximumAge: 5000,
      timeout: 10000
    });
  }
}