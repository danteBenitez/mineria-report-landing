import baLogo from '../../../assets/ba-logo.png';
import { ContaminantEvolutionChart, ContaminantHourlyEvolutionChart } from '../../charts/contaminant-evolution';
import './main.css';

export function Main() {
    return <main className="main-content">
        <hgroup className='fw-bold d-flex justify-content-between align-items-center mt-4'>
            <h2>
                Descripción del <i>dataset</i>
            </h2>
            <div className='d-flex align-items-center'>
                <a href="https://data.buenosaires.gob.ar/dataset/calidad-aire" target='_blank'>
                    <img src={baLogo} alt="BA logo" className="img-fluid" />
                </a>
            </div>
        </hgroup>
        <section>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos ex quidem beatae soluta dignissimos delectus incidunt officiis qui. Natus, quisquam reiciendis! Cum, corporis. Architecto blanditiis saepe molestiae magni dolor cupiditate.
                Ipsum placeat mollitia laborum laudantium dolore a voluptatem, labore eius perferendis temporibus ullam beatae aut deleniti eos quae dolores architecto exercitationem impedit nisi explicabo dignissimos nobis? Alias et mollitia reiciendis?
                Autem quia deleniti dicta fugit placeat nihil doloribus laboriosam voluptate maxime, magnam fuga facilis cum itaque excepturi iste illo similique eius numquam quaerat a modi quidem, error harum. Labore, dignissimos.
                Inventore voluptatem at vero cum provident esse unde illum repudiandae totam debitis odit natus praesentium placeat eveniet, incidunt quasi cupiditate commodi, reiciendis officia! Nesciunt sequi magni esse neque rem a.
                Culpa doloremque, tempora iste non nostrum repudiandae magnam modi dolore cumque optio odit blanditiis quo voluptates et ipsum sequi natus est ipsam adipisci vitae quod. Molestias, deleniti modi? Odit, veniam?</p>
        </section>

        <section>
            <h2 className="fw-semibold">Evolución temporal</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reiciendis laborum hic? Tempora officia iste, quasi debitis placeat beatae eum maxime? Blanditiis fuga vel fugit. Voluptates exercitationem debitis delectus voluptatum.
                Alias tempora porro iste eaque illum dolore unde reiciendis quas nobis? Cumque dolorum voluptates, vero deleniti nesciunt amet quia quae saepe eveniet? Corrupti quia, rem aut repudiandae inventore quo cum?
            </p>
        </section>
        <section>
            <h2>
                Concentración promedio de dióxido de Nitrógeno en la estación
                Centenario a lo largo del timepo.
            </h2>
            <ContaminantEvolutionChart contaminant='no2' station='centenario' unit='ppb' />
            <ContaminantEvolutionChart contaminant='co' station='centenario' unit='ppb' />
        </section>
        <section>
            <h2 className="fw-semibold">Evolución temporal</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reiciendis laborum hic? Tempora officia iste, quasi debitis placeat beatae eum maxime? Blanditiis fuga vel fugit. Voluptates exercitationem debitis delectus voluptatum.
                Alias tempora porro iste eaque illum dolore unde reiciendis quas nobis? Cumque dolorum voluptates, vero deleniti nesciunt amet quia quae saepe eveniet? Corrupti quia, rem aut repudiandae inventore quo cum?
            </p>
            <ContaminantHourlyEvolutionChart contaminant='no2' station='centenario' unit='ppb' />
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