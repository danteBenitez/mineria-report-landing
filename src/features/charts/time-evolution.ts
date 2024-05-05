import * as Plot from '@observablehq/plot';
// @ts-expect-error htl has no types available
import { html } from 'htl';

export type Options = {
    labelX: string,
    labelY: string,
    title: string,
    width: number
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
        width: options.width,
        title: html`<h2 class="fs-4">Evolución temporal de ${options.title}</h2>`
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
        width: options.width,
        title: html`<h2 class="fs-4">Evolución temporal de ${options.title}</h2>`
    })
}