import * as Plot from "@observablehq/plot";
import * as d3 from 'd3';
import { Options } from "./time-evolution";
// @ts-expect-error htl has no types available
import { html } from 'htl';
import { TimeEvolutionChart } from "./time-evolution-chart";
import { useEffect, useState } from "react";
import { COLORS_FOR_CONTAMINANT, ContaminantEvolutionChartProps } from "./contaminant-evolution";

function graphContaminantComparison(data: [string, number][], options: Options) {
    console.log("data: ", data);
    return Plot.plot({
        marks: [
            Plot.barY(data, { tip: true, stroke: options.color, x: d => d[0], y: d => d[1] })
        ],
        x: {
            grid: true,
            axis: 'bottom',
            label: options.labelX,
        },
        y: {
            grid: true,
            axis: 'left',
            label: options.labelY,
        },
        width: options.width,
        title: html`<h2 class="fs-4">${options.title}</h2>`,
    });
}

type ContaminantComparisonChartProps = Omit<ContaminantEvolutionChartProps, 'station'>;

export function ContaminantComparisonChart(props: ContaminantComparisonChartProps) {
    const [data, setData] = useState<[string, number][]>([]);
    const { contaminant, unit } = props;

    useEffect(() => {
        if (data.length) return;
        const path = `./data/processed/average_for_contaminant.csv`;
        fetch(path).then(res => res.text()).then(csv => {
            const result = parseAndProcessCsv(csv, contaminant);
            setData(result);
        })
            .catch(err => {
                console.error(err);
            })
    });

    return <TimeEvolutionChart
        title={`Comparación entre los niveles de ${contaminant} medidos en cada estación`}
        labelX="Estación"
        labelY={`${contaminant.toUpperCase()} (${unit})`}
        color={COLORS_FOR_CONTAMINANT[contaminant]}
        data={data}
        chartFn={graphContaminantComparison}
    />
}

function parseAndProcessCsv(csv: string, contaminant: string): [string, number][] {
    const parsed = d3.csvParse(csv);
    console.log("parsed: ", parsed);
    const mapped = parsed
        .map(row => {
            return {
                station: row.station,
                average: parseFloat(row[contaminant]?.replace(',', '.')),
            }
        })
        .map(row => {
            console.log("row: ", row);
            return row;
        })
        .filter(row => {
            if (Number.isNaN(row.average)) {
                return false;
            }
            return true;
        })
        .map(row => [row.station, row.average] as [string, number]);

    return mapped;
}