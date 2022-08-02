import React from "react";
import Car from "./Car";
import styles from './Carlist.module.css'
function Suvlists({suv}){
    const item = suv.map(car => <Car key={car.id} {...car} />)
    return (
        <div className={`${styles.container} container`}>
            {item}
        </div>
    )
}

export default Suvlists;