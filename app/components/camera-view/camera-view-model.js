import { Observable } from '@nativescript/core';
import { CameraHelper } from '../../shared/utils/camera-helper';
import { LocationHelper } from '../../shared/utils/location-helper';
import { SocialShare } from '@nativescript/social-share';
import { AudioService } from '../../shared/services/audio-service';

export class CameraViewModel extends Observable {
    constructor() {
        super();
        this.lastCapture = null;
        this.location = null;
    }

    async onTakePhoto() {
        try {
            const image = await CameraHelper.takePicture();
            this.location = await LocationHelper.getCurrentLocation();
            
            this.set('lastCapture', image);
            await AudioService.playSound('camera');
            
            console.log('Photo captured at:', {
                latitude: this.location.latitude,
                longitude: this.location.longitude
            });
        } catch (error) {
            console.error('Error taking photo:', error);
        }
    }

    async onShare() {
        if (this.lastCapture) {
            await SocialShare.shareImage(this.lastCapture);
            await AudioService.playSound('share');
        }
    }

    // Navigation methods
    onHomeTab() {
        // Navigation logic to be implemented
    }

    onExploreTab() {
        // Navigation logic to be implemented
    }

    onNotificationsTab() {
        // Navigation logic to be implemented
    }

    onProfileTab() {
        // Navigation logic to be implemented
    }
}