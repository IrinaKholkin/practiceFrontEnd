import { EmployeeCardProps } from "./types"
import './styles.css'

function EmployeeCard ({ name, position, department, img, children }:EmployeeCardProps) {
    return (
        <div className="employee-card-container">
            <h2>{name}</h2>
            <img src={img}/>
            <div>{position}</div>
            <div>{department}</div>
            {/*children это специальный props, с помощью которого можно передавать 
            компонент элементы JSX */}
            {children}
        </div>
    )
}

export default EmployeeCard