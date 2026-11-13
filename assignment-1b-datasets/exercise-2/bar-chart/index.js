d3.csv(
  "SG_GEN_PARLN.csv",
  function (d) {
    return { year: +d.TIME_PERIOD, value: +d.OBS_VALUE };
  },
  function (error, data) {
    if (error) throw error;

    // Setup dimentions
    var svgWidth = 700,
      svgHeight = 420,
      margin = { top: 50, right: 20, bottom: 70, left: 70 };
    var width = svgWidth - margin.left - margin.right,
      height = svgHeight - margin.top - margin.bottom;

    // Setup SVG container
    var svg = d3
      .select("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight);

    // Headline
    svg
      .append("text")
      .attr("x", svgWidth / 2)
      .attr("y", 25)
      .attr("text-anchor", "middle")
      .style("font-size", "18px")
      .style("font-weight", "bold")
      .text("Number of seats in national parliaments held by women");

    // Plot bar chart area
    var chart = svg
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); // Translate by margins so axis has space

    // Setup X scale
    var xScale = d3
      .scaleBand() // Creates equal-width slots along the axis
      .domain(
        data.map(function (d) {
          return d.year;
        }),
      )
      .range([0, width])
      .padding(0.15); // Gap between bars

    // Setup Y scale
    var yScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, function (d) {
          return d.value;
        }),
      ])
      .nice() // Round top of the axis to a round number
      .range([height, 0]);

    chart
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", function (d) {
        return xScale(d.year);
      })
      .attr("y", function (d) {
        return yScale(d.value);
      })
      .attr("width", xScale.bandwidth()) // Width of band created with scale above
      .attr("height", function (d) {
        return height - yScale(d.value);
      })
      .attr("fill", "steelblue");

    // X axis
    chart
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .attr("text-anchor", "end")
      .attr("dx", "-0.5em")
      .attr("dy", "0.15em")
      .attr("transform", "rotate(-45)"); // Rotate years so it looks nicer

    chart.append("g").call(d3.axisLeft(yScale));

    // Axis titles
    chart
      .append("text")
      .attr("x", width / 2)
      .attr("y", height + 55)
      .attr("text-anchor", "middle")
      .text("Year");

    chart
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -height / 2)
      .attr("y", -50)
      .attr("text-anchor", "middle")
      .text("Seats held by Women");
  },
);
