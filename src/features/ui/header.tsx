import airQualityReportLogo from '../../assets/air-quality-logo.png';
import './header.css';

export function Header() {
    return <header className="main-header d-flex flex-wrap justify-content-center align-items-center py-3 border-bottom shadow-sm">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 px-4 me-md-auto link-body-emphasis text-decoration-none gap-2">
            <img src={airQualityReportLogo} alt="" className='object-fit-contain logo'/>
            <span className="fs-4 display-2 fw-medium color-primary">Air Quality Report</span>
        </a>

        <ul className="nav nav-pills d-flex flex-wrap justify-content-center">
            <li className="nav-item"><a href="#" className="nav-link" aria-current="page">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link">About</a></li>
        </ul>
    </header>
}
