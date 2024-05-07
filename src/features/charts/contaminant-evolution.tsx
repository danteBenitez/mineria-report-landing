import { useEffect, useState } from "react"
import * as d3 from 'd3';
import { DailyEvolutionChart, HourEvolutionChart } from "./time-evolution-chart";

export type ContaminantEvolutionChartProps = {
    contaminant: 'no2' | 'co' | 'pm10',
    station: string,
    unit: string,
    // Valor con el que comparar las mediciones
    comparison?: number
}

export const COLORS_FOR_CONTAMINANT = {
    co: 'steelblue',
    no2: 'red',
    pm10: 'green',
};

function capitalize(str: string) {
    return str.replace('_', ' ').split(' ').map(s => s[0].toUpperCase() + s.slice(1)).join(' ');
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
    unit,
    comparison
}: ContaminantEvolutionChartProps) {
    const [data, setData] = useState<[Date, number][] | null>(null);
    const fieldName = `${contaminant}_${station}`;
    const labelY = `${contaminant.toUpperCase()} (${unit})`;
    
    useEffect(() => {
        if (data) return;
        const path = `./data/processed/time-evolution/${fieldName}.csv`;
        console.log(path);
        fetch(path).then(res => res.text()).then(csv => {
            const result = parseAndProcessCsv(csv);
            setData(result);
        })
        .catch(err => {
            console.error(err);
        })
    }, [data, fieldName]);
    const title = `Concentración promedio de ${contaminant.toUpperCase()} en la estación ${capitalize(station)} a lo largo del tiempo`;
    
    return data ? <DailyEvolutionChart data={data} labelX={"Fecha"} labelY={labelY} title={title} comparisonValue={comparison} color={COLORS_FOR_CONTAMINANT[contaminant]} /> : null;
}

export function ContaminantHourlyEvolutionChart({
    contaminant,
    station,
    unit,
}: ContaminantEvolutionChartProps) {
    const [data, setData] = useState<[number, number][] | null>(null);
    const fieldName = `${contaminant}_${station}`;
    const labelY = `${contaminant.toUpperCase()} (${unit})`;
    
    useEffect(() => {
        if (data) return;
        fetch(`./data/processed/hour-evolution/${fieldName}.csv`).then(res => res.text()).then(csv => {
            const parsed = d3.csvParse(csv);
            const mapped = parsed
                .map(row => {
                    return {
                        hour: parseInt(row.hour),
                        average: parseFloat(row["average"]?.replace(',', '.')),
                    }
                })
                .filter(row => !Number.isNaN(row.average))
                .filter(row => row.average > 0)
                .map(row => [row.hour, row.average] as [number, number]);
            setData(mapped);
        })
            .catch(err => {
                console.error(err);
            })
    }, [data, fieldName]);
    const title = `Concentración promedio de ${contaminant.toUpperCase()} en la estación ${capitalize(station)} a lo largo del día`;
    
    return data ? <HourEvolutionChart data={data} labelX={"Hora"} labelY={labelY} title={title} color={COLORS_FOR_CONTAMINANT[contaminant]} /> : null;
}