import heroImage from '../../assets/calidad-del-aire-bg.jpg';
import './hero.css';

export function Hero() {
    return (
        <section className="hero w-100 mb-3 bg-body">
            <hgroup>
                <h1 className="text-accent-animated hero-title">Calidad del aire</h1>
                <h2 className="hero-subtitle">Medición de contaminantes en estaciones de Buenos Aires</h2>
            </hgroup>
            <div className="w-100">
                <img src={heroImage} alt="" className="object-fit-cover hero-img" />
            </div>
        </section>
    );
}