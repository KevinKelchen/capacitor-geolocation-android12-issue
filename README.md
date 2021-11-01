# capacitor-geolocation-android12-issue

## Getting Started

- Refer to the Capacitor Android requirements on Environment Setup
  - https://capacitorjs.com/docs/getting-started/environment-setup#requirements
  - https://capacitorjs.com/docs/getting-started/environment-setup#android-development
- Clone the repo.
- Run `npm ci && npm run build && npx cap sync && npx cap open android`
  - This will install dependencies, build the front-end app, sync to the native project, and open Android Studio.
- Hook up a physical Android device with Android 12 or use an Android Virtual Device (emulator) with Android 12 (API 31) (may need to create one in Android Studio's AVD Manager).
- In Android Studio, select the desired Android device for running the app. Then click the Run button to `Run 'app'`.
- After the app has started on the device, you'll see a prompt for location permissions. Don't do anything yet.
- Open the Google Chrome DevTools for remote inspection. In Chrome on desktop navigate to chrome://inspect/#devices and for the WebView of the app click `inspect`.

## Reproducing the Issue

- The relevant custom code for reproducing the issue is in `/src/app/home/home.page.ts`
- In the DevTools console is where you'll see evidence of the issue.
- Logged to the console immediately will be a call to `Geolocation.checkPermissions()` with a result that looks like:
  - `{ location: "prompt" }`
- We then call `Geolocation.getCurrentPosition()` which causes the location permissions prompt already visible on the screen.
- On the location permissions prompt, select `Approximate` location and either `While using the app` or `Only this time`.
- An error from the `Geolocation.getCurrentPosition()` call will be logged to the console:
  - `{ message: "Location permission was denied" }`
