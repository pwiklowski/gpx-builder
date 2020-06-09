import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { create } from 'xmlbuilder';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
class XMLCreator {
  constructor(settings = {}) {
    _defineProperty(this, "settings", void 0);

    this.settings = settings;
  } // eslint-disable-next-line complexity


  processXmlItem(dir, key, value) {
    if (key === 'attributes') {
      Object.keys(value).forEach(attribute => {
        dir.attribute(attribute, value[attribute]);
      });
      return;
    }

    if (key === 'email') {
      const email = value.split('@');
      dir.ele(key, {
        id: email[0],
        domain: email[1]
      });
      return;
    }

    if (value instanceof Date) {
      dir.ele(key, value.toISOString());
      return;
    }

    if (Array.isArray(value) && typeof value[0] === 'object') {
      value.forEach(item => {
        this.generateXmlData(dir.ele(key), item);
      });
      return;
    }

    if (Array.isArray(value)) {
      dir.ele(key, value.join(','));
      return;
    }

    if (typeof value === 'object') {
      this.generateXmlData(dir.ele(key), value);
      return;
    }

    dir.ele(key, value);
  }

  generateXmlData(dir, object) {
    Object.keys(object).map(key => {
      return {
        key,
        value: object[key]
      };
    }).forEach(({
      key,
      value
    }) => {
      this.processXmlItem(dir, key, value);
    });
  }

  toString(data) {
    const root = create('gpx', {
      encoding: 'UTF-8'
    });
    this.generateXmlData(root, data);
    return root.end(_objectSpread({
      allowEmpty: true,
      indent: '  ',
      newline: '\n',
      pretty: true
    }, this.settings));
  }

}

class Bounds {
  /**
   * @see http://www.topografix.com/gpx/1/1/#type_boundsType
   */
  constructor(minlat, minlon, maxlat, maxlon) {
    _defineProperty(this, "minlat", void 0);

    _defineProperty(this, "minlon", void 0);

    _defineProperty(this, "maxlat", void 0);

    _defineProperty(this, "maxlon", void 0);

    this.minlat = minlat;
    this.minlon = minlon;
    this.maxlat = maxlat;
    this.maxlon = maxlon;
  }

  toObject() {
    const {
      minlat,
      minlon,
      maxlat,
      maxlon
    } = this;
    return {
      attributes: {
        minlat,
        minlon,
        maxlat,
        maxlon
      }
    };
  }

}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

class Copyright {
  /**
   * @param author - Owner of licence
   * @param year - Year of licence
   * @param license - Type of licence
   * @see http://www.topografix.com/gpx/1/1/#type_copyrightType
   */
  constructor(author, {
    year,
    license
  }) {
    _defineProperty(this, "author", void 0);

    _defineProperty(this, "year", void 0);

    _defineProperty(this, "license", void 0);

    this.author = author;
    this.year = year || null;
    this.license = license || null;
  }

  toObject() {
    const {
      author,
      year,
      license
    } = this;
    return _objectSpread$1({
      attributes: {
        author
      }
    }, year ? {
      year
    } : {}, {}, license ? {
      license
    } : {});
  }

}

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

class Link {
  /**
   * @see http://www.topografix.com/gpx/1/1/#type_linkType
   */
  constructor(href, {
    text,
    type
  }) {
    _defineProperty(this, "href", void 0);

    _defineProperty(this, "text", void 0);

    _defineProperty(this, "type", void 0);

    this.href = href;
    this.text = text || null;
    this.type = type || null;
  }

  toObject() {
    const {
      href,
      text,
      type
    } = this;
    return _objectSpread$2({
      attributes: {
        href
      }
    }, text ? {
      text
    } : {}, {}, type ? {
      type
    } : {});
  }

}

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

class Metadata {
  /**
   * @see http://www.topografix.com/gpx/1/1/#type_metadataType
   */
  // eslint-disable-next-line
  constructor({
    name,
    desc,
    author,
    copyright,
    link,
    time,
    keywords,
    bounds,
    extensions
  }) {
    _defineProperty(this, "name", void 0);

    _defineProperty(this, "desc", void 0);

    _defineProperty(this, "author", void 0);

    _defineProperty(this, "copyright", void 0);

    _defineProperty(this, "link", void 0);

    _defineProperty(this, "time", void 0);

    _defineProperty(this, "keywords", void 0);

    _defineProperty(this, "bounds", void 0);

    _defineProperty(this, "extensions", void 0);

    this.name = name || null;
    this.desc = desc || null;
    this.author = author || null;
    this.copyright = copyright || null;
    this.link = link || null;
    this.time = time || null;
    this.keywords = keywords || null;
    this.bounds = bounds || null;
    this.extensions = extensions || null;
  } // eslint-disable-next-line complexity


  toObject() {
    const {
      name,
      desc,
      author,
      copyright,
      link,
      time,
      keywords,
      bounds,
      extensions
    } = this;
    return _objectSpread$3({}, name ? {
      name
    } : {}, {}, desc ? {
      desc
    } : {}, {}, author ? {
      author: author.toObject()
    } : {}, {}, copyright ? {
      copyright: copyright.toObject()
    } : {}, {}, link ? {
      link: link.toObject()
    } : {}, {}, time ? {
      time
    } : {}, {}, keywords ? {
      keywords
    } : {}, {}, bounds ? {
      bounds: bounds.toObject()
    } : {}, {}, extensions ? {
      extensions
    } : {});
  }

}

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    return _objectSpread$4({}, name ? {
      name
    } : {}, {}, email ? {
      email
    } : {}, {}, link ? {
      link: link.toObject()
    } : {});
  }

}

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

class Point {
  /**
   * @see http://www.topografix.com/gpx/1/1/#type_wptType
   */
  // eslint-disable-next-line complexity, sonarjs/cognitive-complexity
  constructor(lat, lon, {
    ele,
    time,
    magvar,
    geoidheight,
    name,
    cmt,
    desc,
    src,
    link,
    sym,
    type,
    fix,
    sat,
    hdop,
    vdop,
    pdop,
    ageofdgpsdata,
    dgpsid,
    extensions
  } = {}) {
    _defineProperty(this, "lat", void 0);

    _defineProperty(this, "lon", void 0);

    _defineProperty(this, "ele", void 0);

    _defineProperty(this, "time", void 0);

    _defineProperty(this, "magvar", void 0);

    _defineProperty(this, "geoidheight", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "cmt", void 0);

    _defineProperty(this, "desc", void 0);

    _defineProperty(this, "src", void 0);

    _defineProperty(this, "link", void 0);

    _defineProperty(this, "sym", void 0);

    _defineProperty(this, "type", void 0);

    _defineProperty(this, "fix", void 0);

    _defineProperty(this, "sat", void 0);

    _defineProperty(this, "hdop", void 0);

    _defineProperty(this, "vdop", void 0);

    _defineProperty(this, "pdop", void 0);

    _defineProperty(this, "ageofdgpsdata", void 0);

    _defineProperty(this, "dgpsid", void 0);

    _defineProperty(this, "extensions", void 0);

    this.lat = lat;
    this.lon = lon;
    this.ele = ele || null;
    this.time = time || null;
    this.magvar = magvar || null;
    this.geoidheight = geoidheight || null;
    this.name = name || null;
    this.cmt = cmt || null;
    this.desc = desc || null;
    this.src = src || null;
    this.link = link || null;
    this.sym = sym || null;
    this.type = type || null;
    this.fix = fix || null;
    this.sat = sat || null;
    this.hdop = hdop || null;
    this.vdop = vdop || null;
    this.pdop = pdop || null;
    this.ageofdgpsdata = ageofdgpsdata || null;
    this.dgpsid = dgpsid || null;
    this.extensions = extensions || null;
  } // eslint-disable-next-line complexity, sonarjs/cognitive-complexity


  toObject() {
    const {
      lat,
      lon,
      ele,
      time,
      magvar,
      geoidheight,
      name,
      cmt,
      desc,
      src,
      link,
      sym,
      type,
      fix,
      sat,
      hdop,
      vdop,
      pdop,
      ageofdgpsdata,
      dgpsid,
      extensions
    } = this;
    return _objectSpread$5({
      attributes: {
        lat,
        lon
      }
    }, ele ? {
      ele
    } : {}, {}, time ? {
      time
    } : {}, {}, magvar ? {
      magvar
    } : {}, {}, geoidheight ? {
      geoidheight
    } : {}, {}, name ? {
      name
    } : {}, {}, cmt ? {
      cmt
    } : {}, {}, desc ? {
      desc
    } : {}, {}, src ? {
      src
    } : {}, {}, link ? {
      link: link.toObject()
    } : {}, {}, sym ? {
      sym
    } : {}, {}, type ? {
      type
    } : {}, {}, fix ? {
      fix
    } : {}, {}, sat ? {
      sat
    } : {}, {}, hdop ? {
      hdop
    } : {}, {}, vdop ? {
      vdop
    } : {}, {}, pdop ? {
      pdop
    } : {}, {}, ageofdgpsdata ? {
      ageofdgpsdata
    } : {}, {}, dgpsid ? {
      dgpsid
    } : {}, {}, extensions && Object.keys(extensions).length > 0 ? {
      extensions
    } : {});
  }

}

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

class Segment {
  /**
   * @see http://www.topografix.com/gpx/1/1/#type_trksegType
   */
  constructor(trkpt, extensions = null) {
    _defineProperty(this, "trkpt", void 0);

    _defineProperty(this, "extensions", void 0);

    this.trkpt = trkpt;
    this.extensions = extensions || null;
  }

  setPoints(trkpt) {
    this.trkpt = trkpt;
    return this;
  }

  toObject() {
    const {
      trkpt,
      extensions
    } = this;
    return _objectSpread$6({
      trkpt: trkpt.map(point => point.toObject())
    }, extensions ? {
      extensions
    } : {});
  }

}

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

class Track {
  /**
   * @see http://www.topografix.com/gpx/1/1/#type_trkType
   */
  // eslint-disable-next-line complexity
  constructor(trkseg, {
    name,
    cmt,
    desc,
    src,
    link,
    number,
    type,
    extensions
  } = {}) {
    _defineProperty(this, "name", void 0);

    _defineProperty(this, "cmt", void 0);

    _defineProperty(this, "desc", void 0);

    _defineProperty(this, "src", void 0);

    _defineProperty(this, "link", void 0);

    _defineProperty(this, "number", void 0);

    _defineProperty(this, "type", void 0);

    _defineProperty(this, "extensions", void 0);

    _defineProperty(this, "trkseg", void 0);

    this.name = name || null;
    this.cmt = cmt || null;
    this.desc = desc || null;
    this.src = src || null;
    this.link = link || null;
    this.number = number || null;
    this.type = type || null;
    this.extensions = extensions || null;
    this.trkseg = trkseg || null;
  }

  setSegments(trkseg) {
    this.trkseg = trkseg;
    return this;
  } // eslint-disable-next-line complexity


  toObject() {
    const {
      name,
      cmt,
      desc,
      src,
      link,
      number,
      type,
      extensions,
      trkseg
    } = this;
    return _objectSpread$7({}, name ? {
      name
    } : {}, {}, cmt ? {
      cmt
    } : {}, {}, desc ? {
      desc
    } : {}, {}, src ? {
      src
    } : {}, {}, link ? {
      link: link.toObject()
    } : {}, {}, number ? {
      number
    } : {}, {}, type ? {
      type
    } : {}, {}, extensions ? {
      extensions
    } : {}, {}, trkseg ? {
      trkseg: trkseg.map(segment => segment.toObject())
    } : {});
  }

}



var models = ({
    __proto__: null,
    Bounds: Bounds,
    Copyright: Copyright,
    Track: Track,
    Segment: Segment,
    Point: Point,
    Metadata: Metadata,
    Person: Person,
    Link: Link
});

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
class BaseBuilder {
  constructor() {
    _defineProperty(this, "data", void 0);

    _defineProperty(this, "schemaLocation", void 0);

    this.data = {};
    this.schemaLocation = ['http://www.topografix.com/GPX/1/1', 'http://www.topografix.com/GPX/1/1/gpx.xsd'];
  }
  /**
   * Set metadata object.
   *
   * @param metadata - Metadata object
   * @returns {BaseBuilder} self
   */


  setMetadata(metadata) {
    this.data.metadata = metadata.toObject();
    return this;
  }
  /**
   * Set list of waypoints
   *
   * @param waypoints - Points objects
   * @returns {BaseBuilder} self
   */


  setWayPoints(waypoints) {
    this.data.wpt = waypoints.map(point => point.toObject());
    return this;
  }
  /**
   * Set list of routes.
   *
   * @param routes - List of routes
   * @returns {BaseBuilder} self
   */


  setRoutes(routes) {
    this.data.rte = routes;
    return this;
  }
  /**
   * Set list of tracks.
   *
   * @param tracks - List of tracks
   * @returns {BaseBuilder} self
   */


  setTracks(tracks) {
    this.data.trk = tracks.map(track => track.toObject());
    return this;
  }
  /**
   * Set extension Object.
   *
   * @param extensions - Extensions
   * @returns {BaseBuilder} self
   */


  setExtensions(extensions) {
    this.data.extensions = extensions;
    return this;
  }
  /**
   * Simple method to set list of points to single track and segment.
   *
   * @param points - list of Points
   * @returns {BaseBuilder} self
   */


  setSegmentPoints(points) {
    this.setTracks([new Track([new Segment(points)])]);
    return this;
  }
  /**
   * Object that can be used to build XML file.
   *
   * @returns {GPXBuildData}
   */


  toObject() {
    return _objectSpread$8({}, this.data, {
      attributes: _objectSpread$8({
        creator: 'fabulator:gpx-builder',
        version: '1.1',
        xmlns: 'http://www.topografix.com/GPX/1/1',
        'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
        'xsi:schemaLocation': this.schemaLocation.join(' ')
      }, this.data.attributes)
    });
  }

}

_defineProperty(BaseBuilder, "MODELS", models);

// @flow strict

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
class GarminPoint extends Point {
  /**
   * Extended garmin point.
   *
   * @see https://www8.garmin.com/xmlschemas/TrackPointExtensionv2.xsd
   */
  // eslint-disable-next-line complexity
  constructor(lat, lon, options = {}) {
    super(lat, lon, options);
    const {
      hr,
      cad,
      speed,
      atemp,
      wtemp,
      depth,
      course,
      bearing
    } = options;
    const extensionPrefix = 'gpxtpx';
    const trackPointExtension = extensionPrefix + ":TrackPointExtension";

    const data = _objectSpread$9({}, hr ? {
      [extensionPrefix + ":hr"]: hr
    } : {}, {}, cad ? {
      [extensionPrefix + ":cad"]: cad
    } : {}, {}, speed ? {
      [extensionPrefix + ":speed"]: speed
    } : {}, {}, atemp ? {
      [extensionPrefix + ":atemp"]: atemp
    } : {}, {}, wtemp ? {
      [extensionPrefix + ":wtemp"]: wtemp
    } : {}, {}, depth ? {
      [extensionPrefix + ":depth"]: depth
    } : {}, {}, course ? {
      [extensionPrefix + ":course"]: course
    } : {}, {}, bearing ? {
      [extensionPrefix + ":bearing"]: bearing
    } : {});

    this.extensions = _objectSpread$9({}, this.extensions, {}, Object.keys(data).length > 0 ? {
      [trackPointExtension]: data
    } : {});
  }

}

function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$a(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$a(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
class GarminBuilder extends BaseBuilder {
  /**
   * Garmin builder include extension for speed, hear rate, cadence, ...
   */
  constructor() {
    super();
    this.schemaLocation = [...this.schemaLocation, 'http://www.garmin.com/xmlschemas/TrackPointExtension/v1', 'http://www.garmin.com/xmlschemas/TrackPointExtensionv1.xsd', 'http://www.garmin.com/xmlschemas/GpxExtensions/v3', 'http://www.garmin.com/xmlschemas/GpxExtensionsv3.xsd'];
    this.data = _objectSpread$a({}, this.data, {
      attributes: _objectSpread$a({}, this.data.attributes, {
        'xmlns:gpxtpx': 'http://www.garmin.com/xmlschemas/TrackPointExtension/v1',
        'xmlns:gpxx': 'http://www.garmin.com/xmlschemas/GpxExtensions/v3'
      })
    });
  }

}

_defineProperty(GarminBuilder, "MODELS", _objectSpread$a({}, BaseBuilder.MODELS, {
  Point: GarminPoint
}));

function ownKeys$b(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$b(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$b(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
class Esk8palPoint extends Point {
  constructor(lat, lon, options = {}) {
    super(lat, lon, options);
    const {
      voltage,
      current,
      used_energy,
      trip_distance,
      altitude,
      speed
    } = options;
    const extensionPrefix = "esk8pal";
    const trackPointExtension = extensionPrefix + ":TrackPointExtension";

    const data = _objectSpread$b({}, speed ? {
      [extensionPrefix + ":speed"]: speed
    } : {}, {}, altitude ? {
      [extensionPrefix + ":altitude"]: altitude
    } : {}, {}, voltage ? {
      [extensionPrefix + ":voltage"]: voltage
    } : {}, {}, current ? {
      [extensionPrefix + ":current"]: current
    } : {}, {}, used_energy ? {
      [extensionPrefix + ":used_energy"]: used_energy
    } : {}, {}, trip_distance ? {
      [extensionPrefix + ":trip_distance"]: trip_distance
    } : {});

    this.extensions = _objectSpread$b({}, this.extensions, {}, Object.keys(data).length > 0 ? {
      [trackPointExtension]: data
    } : {});
  }

}

function ownKeys$c(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$c(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$c(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$c(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
class Esk8palBuilder extends BaseBuilder {
  constructor() {
    super();
    this.schemaLocation = [...this.schemaLocation];
    this.data = _objectSpread$c({}, this.data, {
      attributes: _objectSpread$c({}, this.data.attributes)
    });
  }

}

_defineProperty(Esk8palBuilder, "MODELS", _objectSpread$c({}, BaseBuilder.MODELS, {
  Point: Esk8palPoint
}));

/**
 * Function that create XML string with GPX data.
 *
 * @param data - Formated data
 * @param creator - Creator that converts data to XML string
 * @returns XML string
 */
function buildGPX(data, creator) {
  const gpxCreator = creator || new XMLCreator();
  return gpxCreator.toString(data);
}

export { BaseBuilder, Esk8palBuilder, GarminBuilder, buildGPX };
