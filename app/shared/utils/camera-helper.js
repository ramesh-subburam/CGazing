import { Camera } from '@nativescript/camera';
import { APP_CONSTANTS } from '../config/constants';

export class CameraHelper {
  static async takePicture() {
    const isAvailable = await Camera.isAvailable();
    if (!isAvailable) {
      throw new Error('Camera not available');
    }

    const options = {
      width: 1920,
      height: 1080,
      keepAspectRatio: APP_CONSTANTS.CAMERA.KEEP_ASPECT_RATIO,
      saveToGallery: APP_CONSTANTS.CAMERA.SAVE_TO_GALLERY
    };

    return await Camera.takePicture(options);
  }
}