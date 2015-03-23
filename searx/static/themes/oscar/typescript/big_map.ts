/**
 * searx is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * searx is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with searx. If not, see < http://www.gnu.org/licenses/ >.
 *
 * (C) 2015 by Thomas Pointhuber, <thomas.pointhuber@gmx.at>
 */

/// <reference path="../../../typescript/jquery.d.ts" />
/// <reference path="oscar.d.ts" />
/// <reference path="map/BigMap.ts" />

$(document).ready(function() {
    // check if big map exists
    if($("#big_map").length > 0) {
        // create map
        var mapObj: searx.map.Map = new searx.map.BigMap("big_map", {
            routingMenue: true
        });
    }
});