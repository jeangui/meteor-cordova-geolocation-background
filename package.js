Package.describe({
  summary: "Cordova enabled background geolocation, even when closed/suspended",
  name: 'jeangui:cordova-geolocation-background',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: "https://github.com/jeangui/meteor-cordova-geolocation-background"
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Cordova.depends({
  'com.romainstrock.cordova.background-geolocation': '0.3.9',
  'org.apache.cordova.geolocation': '0.3.12',
  'org.apache.cordova.device': '0.2.11'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.1');
  api.use('underscore', 'client');
  api.use('http', 'client');
  api.export('GeolocationBG', 'client');
  api.addFiles('cordova-geolocation-background.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jeangui:cordova-geolocation-background');
  api.addFiles('cordova-geolocation-background-tests.js', 'client');
});


