import { ReactNode } from "react"

type HeadingWithIconProps = {
    icon: string,
    children: ReactNode
}

export function HeadingWithIcon({ icon, children }: HeadingWithIconProps) {
    return <hgroup className='fw-bold d-flex justify-content-start align-items-center mt-4 gap-2'>
        <i className={`bi bi-${icon} fs-2 ratio-1x1 `}></i>
        <h2 className="fs-2 fw-semibold">
            {children}
        </h2>
    </hgroup>
}