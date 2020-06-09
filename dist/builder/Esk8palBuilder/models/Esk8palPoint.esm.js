import _defineProperty from '@babel/runtime/helpers/defineProperty';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    return _objectSpread({
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

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
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

    const data = _objectSpread$1({}, speed ? {
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

    this.extensions = _objectSpread$1({}, this.extensions, {}, Object.keys(data).length > 0 ? {
      [trackPointExtension]: data
    } : {});
  }

}

export default Esk8palPoint;
