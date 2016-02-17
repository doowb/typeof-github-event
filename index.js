/*!
 * github-event <https://github.com/doowb/github-event>
 *
 * Copyright (c) 2016, Brian Woodward.
 * Licensed under the MIT License.
 */

'use strict';

var events = require('./lib/event-map');

module.exports = {
  typeof: function(payload) {
    var validate = valid(payload);
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

function valid(payload) {
  return function(event) {
    var props = event.props;
    var len = props.length, i = -1;
    while (++i < len) {
      var prop = props[i];
      if (!payload.hasOwnProperty(prop)) {
        return false;
      }
    }
    if (typeof event.validate === 'function') {
      return event.validate(payload);
    }
    return true;
  };
}
