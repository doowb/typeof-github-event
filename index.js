/*!
 * typeof-github-event <https://github.com/doowb/typeof-github-event>
 *
 * Copyright (c) 2016, Brian Woodward.
 * Licensed under the MIT License.
 */
'use strict';

var events = require('./lib/event-map');
var utils = require('./lib/utils');

module.exports = {
  typeof: function(payload) {
    var validate = utils.valid(payload);
    var keys = Object.keys(events);
    var len = keys.length, i = -1;
    while (++i < len) {
      if (validate(events[keys[i]])) {
        return keys[i];
      }
    }
  },
  is: function(event, payload) {
    return this.typeof(payload) === event;
  }
};

Object.keys(events).forEach(function(key) {
  utils.createMethod(module.exports, key);
});
