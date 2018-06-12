/* eslint-disable import/no-duplicates */
// @flow strict
import type { GPXBuildData, Route, Extensions } from './../../types';
import { Track, Metadata, Segment, Point } from './models';
import * as models from './models';

export default class BaseBuilder {
    data: GPXBuildData;
    schemaLocation: Array<string>;

    static MODELS = models;

    constructor() {
        this.data = {};
        this.schemaLocation = ['http://www.topografix.com/GPX/1/1', 'http://www.topografix.com/GPX/1/1/gpx.xsd'];
    }

    /**
     * Set metadata object.
     *
     * @param metadata - Metadata object
     * @returns {BaseBuilder} self
     */
    setMetadata(metadata: Metadata): this {
        this.data.metadata = metadata.toObject();
        return this;
    }

    /**
     * Set list of waypoints
     *
     * @param waypoints - Points objects
     * @returns {BaseBuilder} self
     */
    setWayPoints(waypoints: Array<Point>): this {
        this.data.wpt = waypoints.map(point => point.toObject());
        return this;
    }

    /**
     * Set list of routes.
     *
     * @param routes - List of routes
     * @returns {BaseBuilder} self
     */
    setRoutes(routes: Array<Route>): this {
        this.data.rte = routes;
        return this;
    }

    /**
     * Set list of tracks.
     *
     * @param tracks - List of tracks
     * @returns {BaseBuilder} self
     */
    setTracks(tracks: Array<Track>): this {
        this.data.trk = tracks.map(track => track.toObject());
        return this;
    }

    /**
     * Set extension Object.
     *
     * @param extensions - Extensions
     * @returns {BaseBuilder} self
     */
    setExtensions(extensions: Extensions): this {
        this.data.extensions = extensions;
        return this;
    }

    /**
     * Simple method to set list of points to single track and segment.
     *
     * @param points - list of Points
     * @returns {BaseBuilder} self
     */
    setSegmentPoints(points: Array<Point>): this {
        this.setTracks([new Track([new Segment(points)])]);
        return this;
    }

    /**
     * Object that can be used to build XML file.
     *
     * @returns {GPXBuildData}
     */
    toObject(): GPXBuildData {
        return {
            ...this.data,
            attributes: {
                creator: 'fabulator:gpx-builder',
                version: '1.1',
                xmlns: 'http://www.topografix.com/GPX/1/1',
                'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
                'xsi:schemaLocation': this.schemaLocation.join(' '),
                ...this.data.attributes,
            },
        };
    }
}
