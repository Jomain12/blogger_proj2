var moment = require('moment');
var momhdbs = require('handlebars.moment');

moment().format('MMMM Do YYYY, h:mm:ss a');

requirejs.config({
    packages: [{
      name: 'moment',
      // This location is relative to baseUrl. Choose bower_components
      // or node_modules, depending on how moment was installed.
      location: '|node_modules]/moment' 
      main: 'moment'
    }]
  });

  // only needing core
define(['moment'], function (moment) {
    console.log(moment().format('LLLL'));  // 'Friday, June 24, 2016 1:42 AM'
});
