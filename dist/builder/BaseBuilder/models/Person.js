'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _defineProperty = _interopDefault(require('@babel/runtime/helpers/defineProperty'));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

class Person {
  /**
   * @see http://www.topografix.com/gpx/1/1/#type_personType
   */
  constructor({
    name,
    email,
    link
  }) {
    _defineProperty(this, "name", void 0);

    _defineProperty(this, "email", void 0);

    _defineProperty(this, "link", void 0);

    this.name = name || null;
    this.email = email || null;
    this.link = link || null;
  }

  toObject() {
    const {
      name,
      email,
      link
    } = this;
    return _objectSpread({}, name ? {
      name
    } : {}, {}, email ? {
      email
    } : {}, {}, link ? {
      link: link.toObject()
    } : {});
  }

}

module.exports = Person;
