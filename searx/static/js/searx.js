if(searx.autocompleter) {
    window.addEvent('domready', function() {
	    new Autocompleter.Request.JSON('q', '/autocompleter', {
		    postVar:'q',
		    postData:{
			    'format': 'json'
		    },
		    ajaxOptions:{
		        timeout: 5   // Correct option?
		    },
		    'minLength': 4,
		    // 'selectMode': 'type-ahead',
		    cache: true,
		    delay: 300
	    });
    });
}

if(searx.map) {

    searx.map.marker = {};
    searx.map.marker.routing_from = L.icon({
        iconUrl: 'static/img/marker/map-routing-from.png',
        shadowUrl: 'static/img/marker/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        shadowSize: [41, 41],
        shadowAnchor: [12, 41]
    });

    searx.map.marker.routing_via = L.icon({
        iconUrl: 'static/img/marker/map-routing-via.png',
        shadowUrl: 'static/img/marker/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        shadowSize: [41, 41],
        shadowAnchor: [12, 41]
    });

    searx.map.marker.routing_to = L.icon({
        iconUrl: 'static/img/marker/map-routing-to.png',
        shadowUrl: 'static/img/marker/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        shadowSize: [41, 41],
        shadowAnchor: [12, 41]
    });

    searx.map.marker.location = L.icon({
        iconUrl: 'static/img/marker/map-location.png',
        shadowUrl: 'static/img/marker/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        shadowSize: [41, 41],
        shadowAnchor: [12, 41]
    });

    window.addEvent('domready', function() {
        // create a map in the "map" div, set the view to a given place and zoom
        searx.map.bigmap = L.map('map').setView([48, 13], 4);

        // add an OpenStreetMap tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(searx.map.bigmap);

        searx.map.functions = {};

        searx.map.functions.set_marker_location = function(location) {
            //alert('test');
            }

        searx.map.bigmap.on('click', function(e) {        
        var popLocation= e.latlng;
        var popup = L.popup()
        .setLatLng(popLocation)
        .setContent('<table border="0"><tr style="cursor:pointer;" onclick="searx.map.functions.set_marker_location();"><td><img src="' + searx.map.marker.location.options.iconUrl + '"\></td><td>Was ist hier?</td></tr>' +
                    '<tr style="cursor:pointer;"><td><img src="' + searx.map.marker.routing_from.options.iconUrl + '"\></td><td>Start</td></tr>' +
                    '<tr style="cursor:pointer;"><td><img src="' + searx.map.marker.routing_via.options.iconUrl + '"\></td><td>über</td></tr>' +
                    '<tr style="cursor:pointer;"><td><img src="' + searx.map.marker.routing_to.options.iconUrl + '"\></td><td>Ziel</td></tr></table>')
        .openOn(searx.map.bigmap);        
        });
    });  
}

(function (w, d) {
    'use strict';
    function addListener(el, type, fn) {
        if (el.addEventListener) {
            el.addEventListener(type, fn, false);
        } else {
            el.attachEvent('on' + type, fn);
        }
    }

    function placeCursorAtEnd() {
        if (this.setSelectionRange) {
            var len = this.value.length * 2;
            this.setSelectionRange(len, len);
        }
    }

    addListener(w, 'load', function () {
        var qinput = d.getElementById('q');
        if (qinput !== null && qinput.value === "") {
            addListener(qinput, 'focus', placeCursorAtEnd);
            qinput.focus();
        }
    });

})(window, document);

