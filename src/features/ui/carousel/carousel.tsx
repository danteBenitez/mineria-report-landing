import { ReactNode, useRef, useState } from "react"

type CarouselProps = {
    children: ReactNode[]
}

export function Carousel({ children }: CarouselProps) {
    const id = 'carousel' + useRef(Math.floor(Math.random())).current;
    const [active, setActive] = useState(0);
    return <div id={`${id}`} className="carousel slide">
        <div className="carousel-inner">
            {children.map((slide, i) => <div className={`carousel-item ${i == active ? 'active' : ''}`} key={i}>{slide}</div>)}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={`${id}`} data-bs-slide="prev" onClick={() => setActive(active -1 )}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={`${id}`} data-bs-slide="next" onClick={() => setActive(active + 1)}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
}