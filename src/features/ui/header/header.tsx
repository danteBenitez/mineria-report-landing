import airQualityReportLogo from '../../../assets/air-quality-logo.png';
import './header.css';

export function Header() {
    return <header className="main-header d-flex flex-wrap justify-content-center align-items-center py-3 border-bottom shadow-sm">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 px-4 me-md-auto link-body-emphasis text-decoration-none gap-2">
            <img src={airQualityReportLogo} alt="" className='object-fit-contain logo'/>
            <span className="text-accent-animated text-uppercase color-primary">Reporte</span>
        </a>

        <ul className="nav nav-pills d-flex flex-wrap justify-content-center align-items-center p-2 gap-3">
            <li className="nav-item"><a href="#" className="text-accent-animated text-decoration-none fs-5" aria-current="page">Inicio</a></li>
            <li className="nav-item"><a href="#dataset" className="text-accent-animated text-decoration-none fs-5" aria-current="page">Dataset</a></li>
            <li className="nav-item"><a href="#evolucion" className="text-accent-animated text-decoration-none fs-5" aria-current="page">Evolución</a></li>
            <li className="nav-item"><a href="#horas-del-dia" className="text-accent-animated text-decoration-none fs-5" aria-current="page">Horas</a></li>
            <li className="nav-item"><a href="#comparacion" className="text-accent-animated text-decoration-none fs-5" aria-current="page">Comparación</a></li>
        </ul>
    </header>
}
