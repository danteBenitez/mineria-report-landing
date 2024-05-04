import { useEffect, useState } from "react"
import * as d3 from 'd3';
import { TimeEvolutionChart } from "./time-evolution-chart";

type ContaminantEvolutionChartProps = {
    contaminant: string,
    station: string,
    unit: string
}

function parseAndProcessCsv(csv: string): [Date, number][] {
    const parsed = d3.csvParse(csv);
    const mapped = parsed
        .map(row => {
            return {
                date: new Date(row.date),
                average: parseFloat(row["average"]?.replace(',', '.')),
            }
        })
        .map(row => {
            return row
        })
        .filter(row => {
            if (Number.isNaN(row.average)) {
                return false;
            }
            if (row.date.toString() === 'Invalid Date') {
                return false;
            }
            return true;
        })
        .filter(row => row.average > 0)
        .map(row => [row.date, row.average] as [Date, number]);

    mapped.sort((a, b) => a[0] < b[0] ? -1 : 1);

    return mapped;
}

export function ContaminantEvolutionChart({
    contaminant,
    station,
    unit
}: ContaminantEvolutionChartProps) {
    const [data, setData] = useState<[Date, number][] | null>(null);
    const fieldName = `${contaminant}_${station}`;
    console.log(fieldName);
    const labelY = `${contaminant.toUpperCase()} (${unit})`;
    useEffect(() => {
        if (data) return;
        fetch(`./data/processed/${fieldName}.csv`).then(res => res.text()).then(csv => {
            const result = parseAndProcessCsv(csv);
            setData(result);
        })
            .catch(err => {
                console.error(err);
            })
    }, [data, fieldName]);
    const title = `Concentración promedio de ${contaminant} en la estación ${station} a lo largo del tiempo`;

    return data ? <TimeEvolutionChart data={data} labelX={"Fecha"} labelY={labelY} title={title} /> : null;
}