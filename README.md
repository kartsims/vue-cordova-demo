# vue-cordova-demo

This repository is an example of using the [vue-cordova](https://www.npmjs.com/package/vue-cordova) package. You may use this code to test your dev environment or get inspiration to implement `vue-cordova` in your Vue-based mobile app.

**This example features VueJS 2.x. For 1.x versions, check the `vue1.x` branch of this repository.**

## How-to

**Install NPM dependencies and build static files**

``` bash
npm install
```

**Test in iOS**

``` bash
npm run ios
```
**Test in Android**

``` bash
npm run android
```

**Test in browser**

``` bash
npm run browser
```

> Testing in the browser only allows you to test a very few plugins as Cordova emulates poorly most plugins in the browsers. This can still be useful to tweak the demo app quickly (hot reloading, yay!), instead of building the script files each time you want to preview your changes.

Thanks to [barryvdh](https://github.com/barryvdh) for implementing this feature.

**Test in other platforms**

This demo *should* work on any platform.

It has been tested on OSX only, to build an iOS app. Please let me know how it did for you on your setup.

## Troubleshooting

If you can't access the demo chances are you don't meet Cordova requirements, check them by typing :

``` bash
npm run check
```
