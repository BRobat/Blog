// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD0OjFxYVyiCMbyFs0vA2IcyVDJJCPYOf8",
    authDomain: "blog-90ebc.firebaseapp.com",
    databaseURL: "https://blog-90ebc.firebaseio.com",
    projectId: "blog-90ebc",
    storageBucket: "blog-90ebc.appspot.com",
    messagingSenderId: "854080456370"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
