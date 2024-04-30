import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { Header } from './features/ui/header';
import { Hero } from './features/ui/hero';
import { Main } from './features/ui/main';
import { csvParse } from 'd3';
import { useEffect, useRef, useState } from 'react';
import { createLineChart } from './features/charts/line';

type AirQualityData = {
  date: string;
  hour: string;
  cordoba: string;
  palermo: string;
  la_boca: string;
}

function App() {
  const ref = useRef<HTMLElement>();

  const [data, setData] = useState<AirQualityData[] | null>(null);

  useEffect(() => {
    if (data && ref.current) {
      const svg = createLineChart({
        data,
        domains: {
          x: [new Date(data[0].date), new Date(data[data.length - 1].date)],
          y: []
        }
      })
      if (!svg) return;
      ref.current.appendChild(svg);
    }
  }, [data]);

  useEffect(() => {
    fetch('./data/NO2.csv').then(res => res.text()).then(csv => {
      const parsed = csvParse(csv);
      parsed.sort((a, b) => a.fecha < b.fecha ? -1 : 1);
      console.log(parsed);
    })
  }, []);
  return (
    <div ref={ref}>
      <Header />
      <div className='p-0 m-0 w-100'>
        <Hero />
        <Main />
      </div>
    </div>
  );
}

export default App
