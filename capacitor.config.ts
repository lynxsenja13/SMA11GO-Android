import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sma11go.app',
  appName: 'SMA11GO',
  webDir: 'www',

  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      launchShowDuration: 300,
      launchFadeOutDuration: 200,
      backgroundColor: '#0d47a1',
      showSpinner: false,
      androidScaleType: 'CENTER_INSIDE',
      splashFullScreen: true,
      splashImmersive: true
    }
  }
};

export default config;
