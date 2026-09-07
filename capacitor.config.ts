import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sma11go.app',
  appName: 'SMA11GO',
  webDir: 'www',

  server: {
    url: 'https://sma11go.site.je/',
    cleartext: false
  },

  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      launchShowDuration: 700,
      backgroundColor: '#0d47a1',
      showSpinner: false,
      androidScaleType: 'CENTER_INSIDE'
    }
  }
};

export default config;
