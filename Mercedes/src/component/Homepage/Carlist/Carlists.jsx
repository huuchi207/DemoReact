import React from "react";
import Car from "./Car";
import styles from './Carlist.module.css'
function Carlists({cars}){
    const item = cars.map(car => <Car key={car.id} {...car} />)
    return (
        <div className={`${styles.container} container`}>
            {item}
        </div>
    )
}

export default Carlists;