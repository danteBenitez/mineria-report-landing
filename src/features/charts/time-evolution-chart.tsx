import { useEffect, useRef } from "react";
import { graphTimeEvolution } from "./time-evolution";

type TimeEvolutionChartProps = {
    data: [Date, number][],
    labelX: string,
    labelY: string,
    title: string
};

const noop = () => { };

/**
 * Renders a time evolution line chart from a given data set.
 * @param {{ data: [Date, number][] }}
 */
export function TimeEvolutionChart({
    data,
    labelX,
    labelY,
    title
}: TimeEvolutionChartProps) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!data || !ref.current) return noop;
        const svg = graphTimeEvolution(data, {
            labelX,
            labelY,
            title
        });
        if (!svg) return noop;
        if (ref.current.firstChild) ref.current.removeChild(ref.current.firstChild);
        ref.current.appendChild(svg);
    }, [data, labelX, labelY, title]);

    return (
        <div ref={ref}></div>
    );
}