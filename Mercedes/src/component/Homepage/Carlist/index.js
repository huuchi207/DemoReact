import { useState } from 'react'
import './Carlist.module.css'
import Button from 'react-bootstrap/Button';
import styles from './Carlist.module.css'
import { NavLink } from 'react-router-dom';
function Carlist(props) {
    const carlines = [
        {
            "id": 1,
            "name": "Sedan",
            "src": "/"
        },
        {
            "id": 2,
            "name": "Suv",
            "src": "suv"
        },
        {
            "id": 3,
            "name": "Couples",
            "src": "couples"
        },
        {
            "id": 4,
            "name": "Maybach",
            "src": "maybach"
        },
        {
            "id": 5,
            "name": "Sport",
            "src": "sport"
        },
    ]
    const carlist = carlines.map(carline => (
        <NavLink to={carline.src}><div id={carline.id} type="button" className={`${styles.btn} btn btn-secondary`}>{carline.name}</div></NavLink>
    ))
    return (
        <>
            <nav className={`btn-group ${styles.btn_group} `}>
                {carlist}
                <NavLink to="convetible"><div type="button" className={`${styles.btn} ${styles.none_border} btn btn-secondary`}>Convetible</div></NavLink>

            </nav>
            <div className={`${styles.line} container`}></div>
        </>
    );
}

export default Carlist;

