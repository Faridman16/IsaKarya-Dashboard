// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAQdJ-28xzghUiH1VGXGpzr_-uyOueWe8A",
    authDomain: "isakarya-dashboard.firebaseapp.com",
    databaseURL: "https://isakarya-dashboard.firebaseio.com",
    projectId: "isakarya-dashboard",
    storageBucket: "isakarya-dashboard.appspot.com",
    messagingSenderId: "397204852962",
    appId: "1:397204852962:web:ffca924c551bdca7"
  },
  api: "http://localhost:4300/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
