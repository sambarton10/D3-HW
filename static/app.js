// Create SVG Wrapper Dimensions

var svgWidth = 1200;
var svgHeight = 600;

// Create Margin
var margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50
};

var height = svgHeight - margin.top - margin.bottom;
var width = svgWidth - margin.left - margin.right;

//Create SVG Wrapper, append SVG group that will hold our chart

var svg = d3
    .select(".scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

//Append the SVG Group
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.right})`);

//First xAxis

var firstxAxis = "income";

function xScale(data, firstxAxis) {
    //Create Scales
    var xLinearScale =d3.scaleLinear()
        .domain([d3.min(data, d => d[firstxAxis]) * 0.8,
            d3.max(data, d => d[firstxAxis]) * 1.2
        ])
        .range([0, width]);
    return xLinearScale;
}
