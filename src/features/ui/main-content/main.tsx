import baLogo from '../../../assets/ba-logo.png';
import { ContaminantEvolutionChart } from '../../charts/contaminant-evolution';
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
        <div className='fw-bold d-flex justify-content-between align-items-center mt-4'>
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
        <section>
            <HeadingWithIcon icon="clock">
                Evolución temporal
            </HeadingWithIcon>
            <p>
                Los siguientes gráficos representan la evolución temporal cada contaminante <b>desde 2019</b>.
                Las medidas se realizan de forma diaria, promediando aquellas tomadas en cada día.
            </p>
            <ContaminantEvolutionChart contaminant='no2' station='centenario' unit={UNITS['no2']} />
            <ContaminantEvolutionChart contaminant='co' station='centenario' unit={UNITS['co']} />
            <p>
                Como se puede apreciar, las medidas
            </p>
        </section>
        <section>
            {/* <ContaminantEvolutionChart contaminant='co' station='centenario' unit='ppb' /> */}
        </section>
        <section>
            <h2 className="fw-semibold">Evolución temporal</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reiciendis laborum hic? Tempora officia iste, quasi debitis placeat beatae eum maxime? Blanditiis fuga vel fugit. Voluptates exercitationem debitis delectus voluptatum.
                Alias tempora porro iste eaque illum dolore unde reiciendis quas nobis? Cumque dolorum voluptates, vero deleniti nesciunt amet quia quae saepe eveniet? Corrupti quia, rem aut repudiandae inventore quo cum?
            </p>
            {/* <ContaminantHourlyEvolutionChart contaminant='no2' station='centenario' unit='ppb' /> */}
        </section>

        <section>
            <h2 className="fw-semibold">Evolución temporal</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reiciendis laborum hic? Tempora officia iste, quasi debitis placeat beatae eum maxime? Blanditiis fuga vel fugit. Voluptates exercitationem debitis delectus voluptatum.
                Alias tempora porro iste eaque illum dolore unde reiciendis quas nobis? Cumque dolorum voluptates, vero deleniti nesciunt amet quia quae saepe eveniet? Corrupti quia, rem aut repudiandae inventore quo cum?
            </p>
        </section>
    </main>;
}