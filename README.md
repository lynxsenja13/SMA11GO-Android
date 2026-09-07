# SMA11GO Android APK

Wrapper Android berbasis Capacitor untuk website SMA11GO.

- App name: SMA11GO
- Package ID: com.sma11go.app
- Website: https://sma11go.site.je/
- Backend PHP/MySQL tetap berada di hosting.

## Build lokal

```bash
npm install
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug
```

APK debug akan berada di `android/app/build/outputs/apk/debug/app-debug.apk`.

## Build via GitHub Actions

Workflow pada `.github/workflows/build-apk.yml` akan membuat project Android dan menghasilkan APK debug sebagai artifact, sehingga komputer dengan RAM kecil tidak perlu menjalankan Android Studio.
