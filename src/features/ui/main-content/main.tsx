import baLogo from '../../../assets/ba-logo.png';
import { ContaminantComparisonChart } from '../../charts/contaminant-comparison-chart';
import { ContaminantEvolutionChart, ContaminantHourlyEvolutionChart } from '../../charts/contaminant-evolution';
import { HeadingWithIcon } from '../headings/heading-with-icon';
import './main.css';

// const LIMIT_FOR_CONTAMINANTS = {
//     'no2': 200,
//     'co': 35,
//     'pm10': 50
// };

// const CONTAMINANTS = ['no2', 'co', 'pm10'] as const;
// const STATIONS = ['centenario', 'la_boca', 'palermo', 'cordoba'] as const;

const UNITS = {
    'no2': 'ppm',
    'co': 'ppb',
    'pm10': 'µg/m3'
}


export function Main() {
    return <main className="main-content">
        <div className='fw-bold d-flex justify-content-between align-items-center mt-4' id="dataset">
            <HeadingWithIcon icon="database">
                Descripción del <i>dataset</i>
            </HeadingWithIcon>
            <div className='d-flex align-items-center'>
                <a href="https://data.buenosaires.gob.ar/dataset/calidad-aire" target='_blank'>
                    <img src={baLogo} alt="BA logo" className="img-fluid" />
                </a>
            </div>
        </div>
        <section>
            <p>
                <a href="https://data.buenosaires.gob.ar/dataset/calidad-aire">
                    Buenos Aires Data
                </a> presenta un <i>dataset</i> de mediciones relacionadas a la calidad del aire
                tomadas en distintas estaciones de la ciudad.
            </p>
            <p>
                Las estacios consideradas son cuatro:
            </p>
            <ul className="list-group">
                <li className="list-group-item">Centenario</li>
                <li className="list-group-item">Cordoba</li>
                <li className="list-group-item">La Boca</li>
                <li className="list-group-item">Palermo</li>
            </ul>

            <p>
                Los contaminantes medidos son tres. Cada uno tiene una unidad de medida específica que se detalla a continuación.
            </p>
            <figure className='figure w-100' id="fig-1">
                <table className='table-bordered w-100'>
                    <thead>
                        <tr>
                            <th>Contaminante</th>
                            <th>Unidad de medida</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>Monóxido de carbono (CO)</td>
                            <td>Partes por millón (ppm)</td>
                        </tr>
                        <tr>
                            <td>Dióxido de nitrógeno (NO<sub>2</sub>)</td>
                            <td>Partes por miles de millones (ppb)</td>
                        </tr>
                        <tr>
                            <td>Partículas materiales respirables (PM<sub>10</sub>)</td>
                            <td>Partes por miles de millones (ppb)</td>
                        </tr>
                    </tbody>
                </table>
                <figcaption className='figure-caption text-center p-2'>
                    <i>
                        (Fig. 1) Contaminantes medidos con sus respectivas unidades de medida.
                    </i>
                </figcaption>
            </figure>
        </section>
        <section id="evolucion">
            <HeadingWithIcon icon="clock">
                Evolución temporal
            </HeadingWithIcon>
            <p>
                Los siguientes gráficos representan la evolución temporal cada contaminante <b>desde 2019</b>.
                Las medidas se realizan de forma diaria, promediando aquellas tomadas en cada día.
            </p>
            <ContaminantEvolutionChart contaminant='no2' station='centenario' unit={UNITS['no2']} />
            <ContaminantEvolutionChart contaminant='no2' station='cordoba' unit={UNITS['no2']} />
            <ContaminantEvolutionChart contaminant='no2' station='la_boca' unit={UNITS['no2']} />
            <p>
                Como se puede apreciar, las variaciones que ocurren son más bien pequeñas, pero en este sentido destaca el dióxido de nitrógeno. Ese último contaminante, sin embargo, tiene una tendencia levemente decreciente en comparación a las mediciones desde 2019.
                La excepción es la estación de La Boca, en que las medidas están aumentando en comparación a sus antecedentes.
            </p>
            <p>
                A continuación, consideramos las medidas de dióxido de carbono:
            </p>
            <ContaminantEvolutionChart contaminant='co' station='centenario' unit={UNITS['co']} />
            <ContaminantEvolutionChart contaminant='co' station='cordoba' unit={UNITS['co']} />
            <ContaminantEvolutionChart contaminant='co' station='la_boca' unit={UNITS['co']} />
            <p>
                Por otro lado, las medidas de monóxido de carbono se mantienen reducidas en las tres estaciones; conservando, aún así, valores atípicos de hasta 17 ppb.
                Es imposible decidir si estos se corresponden a errores de medición o a eventos puntuales, porque, en lo que respecta a los límites permitidos,
                las mediciones están dentro de los <a>valores normales</a>.
            </p>
        </section>
        <section id="horas-del-dia">
            <HeadingWithIcon icon="sun">
                Análisis de mediciones según la hora del día
            </HeadingWithIcon>
            <p>
                A continuación, comparamos las mediciones según la hora del día en que se dieron.
            </p>
            <ContaminantHourlyEvolutionChart contaminant='no2' station='centenario' unit={UNITS['no2']} />
            <ContaminantHourlyEvolutionChart contaminant='no2' station='cordoba' unit={UNITS['no2']} />
            <ContaminantHourlyEvolutionChart contaminant='no2' station='la_boca' unit={UNITS['no2']} />
            <p>
                Es interesante la tendencia de, para todas las estaciones, <b>las mediciones del dióxido de nitrógeno alcanzan su máximo en el período desde las 18 hasta las 24.</b>
            </p>
            
            <ContaminantHourlyEvolutionChart contaminant='co' station='centenario' unit={UNITS['co']} />
            <ContaminantHourlyEvolutionChart contaminant='co' station='cordoba' unit={UNITS['co']} />
            <ContaminantHourlyEvolutionChart contaminant='co' station='la_boca' unit={UNITS['co']} />

            <p>
                Con el monóxido de carbono, encontramos que alcanzan su máximo al principio y al final del día.
            </p>

            <ContaminantHourlyEvolutionChart contaminant='pm10' station='centenario' unit={UNITS['pm10']} />
            <ContaminantHourlyEvolutionChart contaminant='pm10' station='cordoba' unit={UNITS['pm10']} />
            <ContaminantHourlyEvolutionChart contaminant='pm10' station='la_boca' unit={UNITS['pm10']} />
            <p>
                Las partículas materiales, por otro lado, tienen una concentración casi exactamente constante a lo largo de todo el día.
            </p>
        </section>

        <section id="comparacion">
            <HeadingWithIcon icon="rulers">
                Promedios de mediciones por estación.
            </HeadingWithIcon>
            <p>
                A continuación, comparamos los promedios de mediciones por estación, para cada contaminante.
                Como en la estación de Palermo no se incluyen muchas mediciones, el valor asignado es -1, significando un valor inválido.
            </p>
            <ContaminantComparisonChart contaminant='no2' unit={UNITS['no2']} />
            <ContaminantComparisonChart contaminant='co' unit={UNITS['co']} />
            <ContaminantComparisonChart contaminant='pm10' unit={UNITS['pm10']} />

            <p>
                Con los valores definidos, podemos ver que la estación de Palermo, si bien no tiene mediciones de dióxido de nitrógeno o de partículas materiales,
                cuenta con el nivel más alto de monóxido de carbono de las cuatro estaciones.
            </p>
        </section>
    </main>;
}