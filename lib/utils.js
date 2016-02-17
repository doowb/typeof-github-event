'use strict';

var utils = {};

/**
 * Returns a validate method to validate that the given payload
 * is for a given event.
 *
 * ```js
 * var validate = utils.valid(payload);
 * if (validate(events['commit_comment'])) {
 *   console.log('payload is a commit comment');
 * }
 * ```
 * @param  {Object} `payload` Github event payload.
 * @return {Function} validate function that takes an event to validate against.
 */

utils.valid = function(payload) {
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
};

/**
 * Creates a method for the specified key that will call
 * the `is` method using the `key` and `payload`.
 *
 * @param  {Object} `obj` Object to add method to.
 * @param  {String} `key` Event key to use.
 */

utils.createMethod = function(obj, key) {
  var name = utils.namify(key);
  obj[name] = function(payload) {
    return this.is(key, payload);
  };
};

/**
 * Turn the event keys into method names.
 *
 * @param  {String} `key` Event key.
 * @return {String} Method name.
 */

utils.namify = function(key) {
  var name = 'is' + key.charAt(0).toUpperCase() + key.substr(1).replace(/_(.)?/gi, function(match, char) {
    return char.toUpperCase();
  });
  return name;
};

/**
 * Exposes `utils`
 */

module.exports = utils;
