import * as Plot from '@observablehq/plot';

type Options = {
    labelX: string,
    labelY: string,
    title: string
}

export function graphTimeEvolution(data: [Date,number][], options: Options) {
    return Plot.line(data, {
        tip: true,
        stroke: '#1f77b4',
    }).plot({
        x: {
            grid: true,
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
        title: `Evolución temporal de ${options.title}`,
    })
}