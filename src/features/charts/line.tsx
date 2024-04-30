import * as d3 from 'd3';

type CreateLineChartParams<T> = {
    width: number;
    height: number;
    domains: {
        x: [Date, Date],
        y: [number, number];
    },
    margin: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    },
    data: T
}

export function createLineChart<T>(params: CreateLineChartParams<T>) {
    const { width, height, data, domains, margin = {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
    } } = params;

    // Declare the x (horizontal position) scale.
    const x = d3.scaleUtc()
        .domain(domains.x)
        .range([margin.left, width - margin.right]);

    // Declare the y (vertical position) scale.
    const y = d3
        .scaleLinear(domains.y)
        .range([height - margin.bottom, margin.top]);

    // Declare the line generator.
    const line = d3.line()
        .x(d => x(d.date))
        .y(d => y(d.cordoba))

    // Create the SVG container.
    const svg = d3.create("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

    // Add the x-axis.
    svg.append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));

    // Add the y-axis, remove the domain line, add grid lines and a label.
    svg.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y).ticks(height / 40))
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick line").clone()
            .attr("x2", width - margin.left - margin.right)
            .attr("stroke-opacity", 0.1))
        .call(g => g.append("text")
            .attr("x", -margin.left)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text("↑ Daily close ($)"));

    // Append a path for the line.
    svg.append("path")
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", line(data));

    return svg.node();
}

