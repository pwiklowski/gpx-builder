import Point, { PointOptions } from "../../BaseBuilder/models/Point";

interface Esk8palPointOptions extends PointOptions {
  voltage?: number;
  current?: number;
  used_energy?: number;
  trip_distance?: number;

  altitude?: number;
  speed?: number;
}

export default class Esk8palPoint extends Point {
  public constructor(
    lat: number,
    lon: number,
    options: Esk8palPointOptions = {}
  ) {
    super(lat, lon, options);
    const {
      voltage,
      current,
      used_energy,
      trip_distance,
      altitude,
      speed,
    } = options;

    const extensionPrefix = "esk8pal";
    const trackPointExtension = `${extensionPrefix}:TrackPointExtension`;
    const data = {
      ...(speed ? { [`${extensionPrefix}:speed`]: speed } : {}),
      ...(altitude ? { [`${extensionPrefix}:altitude`]: altitude } : {}),
      ...(voltage ? { [`${extensionPrefix}:voltage`]: voltage } : {}),
      ...(current ? { [`${extensionPrefix}:current`]: current } : {}),
      ...(used_energy
        ? { [`${extensionPrefix}:used_energy`]: used_energy }
        : {}),
      ...(trip_distance
        ? { [`${extensionPrefix}:trip_distance`]: trip_distance }
        : {}),
    };

    this.extensions = {
      ...this.extensions,
      ...(Object.keys(data).length > 0
        ? {
            [trackPointExtension]: data,
          }
        : {}),
    };
  }
}
