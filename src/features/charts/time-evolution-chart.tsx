import { useEffect, useRef, useState } from "react";
import { Options, graphTimeEvolution } from "./time-evolution";

type TimeEvolutionChartProps = {
    data: [Date, number][],

} & 
    // Omitting the width property from the Options type
    // because we make it 100% of the parent container
    Omit<Options, "width">;

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
    const [size, setSize] = useState(0);

    useEffect(() => {
        if (!data || !ref.current || !size) return noop;
        const svg = graphTimeEvolution(data, {
            labelX,
            labelY,
            title,
            width: size
        });
        if (!svg) return noop;
        if (ref.current.firstChild) ref.current.removeChild(ref.current.firstChild);
        ref.current.appendChild(svg);
    }, [data, labelX, labelY, title, size]);

    useEffect(() => {
        if (!ref.current) return noop;
        setSize(ref.current.clientWidth);
        const handleResize = () => setSize(ref.current?.clientWidth ?? 0);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [ref]);

    return (
        <div ref={ref} className="w-100" style={{ width: size }}></div>
    );
}