import React from "react";
import { Link } from "react-router-dom";
import styles from './Carlist.module.css'

function Car({ id, image, name, price }) {
    return (
        <Link className={styles.link} to={`/car/${id}`}>
            
            <div className={styles.containerImg}>
                <div>
                    <h3 className={styles.font}>{name}</h3>
                    <p  className={styles.font_p}>{price}</p>
                </div>
                <div>
                    <img src={image} alt={name} className={styles.img} />
                </div>
            </div>
        </Link>
    )
}

export default Car;