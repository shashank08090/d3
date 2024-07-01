// BarChart.js

import React, { useRef, useEffect, useCallback, useMemo } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {
  const svgRef = useRef();
  const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  const width = 600 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;
  // Memoize the scales to prevent unnecessary recalculations
  const xScale = useMemo(() =>
    d3.scaleBand()
      .domain(data.map(d => d.category))
      .range([margin.left, width + margin.left])
      .padding(0.1),
    [data]
  );

  const yScale = useMemo(() =>
    d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .nice()
      .range([height, 0]),
    [data]
  );

 
  const drawChart = useCallback(() => {
    const svg = d3.select(svgRef.current);

    // Clear previous elements before rendering
    svg.selectAll("*").remove();

    // Add bars
    svg.selectAll("rect")
      .data(data)
      .enter().append("rect")
      .attr("x", d => xScale(d.category))
      .attr("y", d => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", d => height - yScale(d.value))
      .attr("fill", "steelblue");

    // Add x-axis
    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    // Add y-axis
    svg.append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(yScale));
  }, [data, xScale, yScale]); 

  useEffect(() => {
    if (data) {
      drawChart();
    }
  }, [data, drawChart]);

  // Define dimensions and margins
 


  return (
    <svg ref={svgRef} width="600" height="400">
      {/* SVG content will be rendered here */}
    </svg>
  );
};

export default BarChart;
