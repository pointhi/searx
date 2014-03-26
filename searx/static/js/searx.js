searx.RenderWeatherGraph = function(weatherClass) {
    
    var plotObjectPlaceholder = weatherClass.getElement('.weathergraph').getElement('.placeholder');
    var rawPlotData = JSON.parse(weatherClass.getElement('script[type="text/json"].raw_data').innerHTML);

    var plotData = {};
    plotData.temperature = new Array();
    plotData.temperature_min = new Array();
    plotData.temperature_max = new Array();
    plotData.humidity = new Array();
    plotData.pressure = new Array();

    for (var i=0; i<rawPlotData.length; i++) {
        var datetime = new Date(rawPlotData[i].datetime).getTime()
    
        plotData.temperature.push([datetime, rawPlotData[i].temperature]);
        plotData.temperature_min.push([datetime, rawPlotData[i].temperature_min]);
        plotData.temperature_max.push([datetime, rawPlotData[i].temperature_max]);
        plotData.humidity.push([datetime, rawPlotData[i].humidity]);
        plotData.pressure.push([datetime, rawPlotData[i].pressure]);
    }

    searx.rawdata = rawPlotData;
    searx.data = plotData;

    searx.flot = flot.plot(plotObjectPlaceholder, [{
        data: plotData.temperature_max,
        label: "Temperature max",
        yaxis: 2
    },
    {
        data: plotData.temperature_min,
        label: "Temperature min",
        yaxis: 2
    },{
        data: plotData.humidity,
        label: "Humidity"
    }], {
        series: {
            interpolation: 'bezier',
            lines: {
                show: true
            },
            points: {
                show: true
            }
        },
        grid: {
            hoverable: true,
            clickable: true
        },
        xaxis: {
            multipleSeriesEvent: null,
            swipeLine: null,
            mode: "time",
            tickSize: [12, "hour"],
        },
        yaxes: [
            {
                tickFormatter: function (val, axis) {
                    return val + "%";
                },
                position: "left",
                max: 65,
                axisLabel: "Humidity",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: "Verdana, Arial, Helvetica, Tahoma, sans-serif",
                axisLabelPadding: 5
            },
            {
                position: "right",
                tickFormatter: function (val, axis) {
                    return val + "\u00B0C";
                },
                max: 40,
                axisLabel: "Temperature",
                /*axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: "Verdana, Arial, Helvetica, Tahoma, sans-serif",
                axisLabelPadding: 5*/
            }
        ]
        
    });
    //tooltip.inject(document.body);
    plotObjectPlaceholder.addEvent('plotclick', function (event, pos, items) {
        console.log(event, pos, items);
    });
};

var tooltip = new Element('div', {
    id: "tooltip"
});

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

window.addEvent('domready', function () {
    for (var i=0; i<$$('.weather').length; i++) {
        searx.RenderWeatherGraph($$('.weather')[i]);
    }
});
