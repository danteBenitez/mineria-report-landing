import * as Plot from '@observablehq/plot';
// @ts-expect-error htl has no types available
import { html } from 'htl';

export type Options = {
    labelX: string,
    labelY: string,
    title: string,
    width: number,
    // This value is used to compare the data with a threshold
    // and graph a line to show the threshold
    comparisonValue?: number
}

export function graphTimeEvolution(data: [Date, number][], options: Options) {
    return Plot.line(data, {
        tip: true,
        stroke: '#1f77b4',
    }).plot({
        x: {
            grid: true,
            line: true,
            axis: 'bottom',
            ticks: 5,
            tickFormat: '%B %d, %Y',
            label: options.labelX,
        },
        y: {
            grid: true,
            axis: 'left',
            label: options.labelY,
        },
        marks: [
            Plot.ruleY([options.comparisonValue], { tip: true, title: ["Valor máximo permitido"], stroke: 'red' })
        ],
        width: options.width,
        title: html`<h2 class="fs-4">${options.title}</h2>`
    })
}

export function graphHourEvolution(data: [number, number][], options: Options) {
    return Plot.barY(data, {
        tip: true,
        stroke: '#1f77b4',
        x: d => d[0],
        y: d => d[1],
    }).plot({
        x: {
            line: true,
            grid: true,
            axis: 'bottom',
            label: options.labelX,
        },
        y: {
            grid: true,
            axis: 'left',
            label: options.labelY,
        },
        marks: [
            Plot.ruleY([options.comparisonValue], { tip: true, stroke: 'red', title: ['Valor máximo permitido'] })
        ],
        width: options.width,
        title: html`<h2 class="fs-4">${options.title}</h2>`
    })
}

export function graphPercentage(data: number[], options: Options) {
    return Plot.plot({
        marks: [
            Plot.barX(data),
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