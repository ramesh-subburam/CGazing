import { Application } from '@nativescript/core';
import { Geolocation } from '@nativescript/geolocation';

// Request permissions early
Geolocation.enableLocationRequest()
    .then(() => console.log('Location enabled'))
    .catch(err => console.error('Error enabling location:', err));

Application.run({ moduleName: 'app-root' });