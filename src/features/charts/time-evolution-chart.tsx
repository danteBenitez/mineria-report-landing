import { useEffect, useRef, useState } from "react";
import { Options, graphHourEvolution, graphTimeEvolution } from "./time-evolution";
import { plot } from "@observablehq/plot";

type PlotType = ReturnType<typeof plot>;

type TimeEvolutionChartProps<T> = {
    data: T,
    chartFn: (data: T, options: Options) => PlotType
} & 
    // Omitting the width property from the Options type
    // because we make it 100% of the parent container
    Omit<Options, "width">;

const noop = () => { };


/**
 * Renders a time evolution line chart from a given data set.
 * @param {{ data: [Date, number][] }}
 */
export function TimeEvolutionChart<T>({
    data,
    chartFn,
    ...options
}: TimeEvolutionChartProps<T>) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [size, setSize] = useState(0);

    useEffect(() => {
        if (!data || !ref.current || !size) return noop;
        const svg = chartFn(data, {
            ...options,
            width: size,
        });
        if (!svg) return noop;
        if (ref.current.firstChild) ref.current.removeChild(ref.current.firstChild);
        ref.current.appendChild(svg);
    }, [data, chartFn, options, ref, size]);

    useEffect(() => {
        if (!ref.current) return noop;
        setSize(ref.current.clientWidth);
        const handleResize = () => setSize(ref.current?.clientWidth ?? 200);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [ref]);

    return (
        <div ref={ref} className="w-100" style={{ width: size }}></div>
    );
}

type DailyEvolutionChartProps = Omit<TimeEvolutionChartProps<[Date, number][]>, "chartFn">;

export function DailyEvolutionChart(props: DailyEvolutionChartProps) {
    return <TimeEvolutionChart
        {...props}
        chartFn={graphTimeEvolution} 
    />
}

type HourEvolutionChartProps = Omit<TimeEvolutionChartProps<[number, number][]>, "chartFn">;

export function HourEvolutionChart(props: HourEvolutionChartProps) {
    return <TimeEvolutionChart
        {...props}
        chartFn={graphHourEvolution} 
    />
}