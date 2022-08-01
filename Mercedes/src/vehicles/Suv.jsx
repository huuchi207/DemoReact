import React from "react";
import { useOutletContext } from "react-router-dom";
import Carlists from "../component/Homepage/Carlist/Carlists";
function Suv(){
    const {cars} = useOutletContext();
    return (
        <div>
            <Carlists cars={cars} />
        </div>
    )
}

export default Suv;