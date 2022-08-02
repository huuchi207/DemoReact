import React from "react";
import { couples } from "../../../mocks/data";
import Car from "./Car";
import styles from './Carlist.module.css'
function Coupleslists({couples}){
    const item = couples.map(car => <Car key={car.id} {...car} />)
    return (
        <div className={`${styles.container} container`}>
            {item}
        </div>
    )
}

export default Coupleslists;