import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sma11go.app',
  appName: 'SMA11GO',
  webDir: 'www',
  server: {
    url: 'https://sma11go.site.je/',
    cleartext: false
  }
};

export default config;
