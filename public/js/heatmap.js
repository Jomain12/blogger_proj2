$(document).ready(function(){
    
var cal = new CalHeatMap();
cal.init({
start: new Date(2000, 0), // January, 1st 2000
range: 12,
domain: "year",
subDomain: "month",
data: "http://localhost/api?start={{d:start}}&stop={{d:end}}"
});

var data = [{count: 2, date: "2017-09-23"}];

var options = {months: 12};

$("#heatmap-1").CalendarHeatmap( data , options );

function randomDate(start, end) {
    var date = new Date(+start + Math.random() * (end - start));
    return moment(date).format('YYYY-MM-DD');
}

var events = ( Math.random() * 200 ).toFixed(0);
var data = [];
for (var i = 0; i < events; i++ ) {
    data.push({
        count: parseInt( ( Math.random() * 200 ).toFixed(0) ),
        date: randomDate( moment().subtract(1, 'year').subtract(5,'months').format('x'), moment().format('x') )
    });
}


$("#heatmap-1").CalendarHeatmap(data, {});

$("#heatmap-2").CalendarHeatmap(data, {
    title: "Gradient \"red\", end one month from current",
    lastMonth: moment().month(),
    coloring: "red",
    legend: {
        minLabel: "Fewer"
    },
    labels: {
        custom: {
            monthLabels: "MMM"
        }
    }
});

$("#heatmap-3").CalendarHeatmap(data, {
    title: "Gradient \"electric\", labels days and custom month labels, end one year from current, week starts on Sunday",
    months: 5,
    lastYear: moment().subtract(1,'years').year(),
    coloring: "electric",
    legend: {
        align: "left",
        minLabel: "Fewer"
    },
    weekStartDay: 0,
    labels: {
        days: true,
        custom: {
            monthLabels: "MMM 'YY"
        }
    },
    tooltips:{
        show: true
    }
});

$("#heatmap-4").CalendarHeatmap( data, {
    title: "Tile shape \"Circle\"",
    tiles: {
        shape: "circle"
    }
});

$("#heatmap-5").CalendarHeatmap( [], {
    title: "No Data"
});
});
