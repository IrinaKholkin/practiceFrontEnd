import { ReactNode } from "react"

export interface EmployeeCardProps {
    name: string,
    position: string,
    department: string
    img?: string
    children: ReactNode
}