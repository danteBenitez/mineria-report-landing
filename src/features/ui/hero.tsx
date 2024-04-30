import heroImage from '../../assets/calidad-del-aire-bg.jpg';
import './hero.css';

export function Hero() {
    return (
        <section className="hero w-100 d-flex flex-column flex-md-row align-items-center mb-3 bg-body">
            <div className="w-100">
                <img src={heroImage} alt="" className="object-fit-cover hero-img" />
                <hgroup>
                    <h1>Reporte sobre calidad de aire</h1>
                    <span>Medición de contaminantes atmosféricos</span>
                </hgroup>
            </div>
        </section>
    );
}