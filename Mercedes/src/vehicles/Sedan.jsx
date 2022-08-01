import React from "react";
import { useOutletContext } from "react-router-dom";
import Carlists from "../component/Homepage/Carlist/Carlists";
function Sedan() {
    const {cars} = useOutletContext();
    return (
        <div>
            <Carlists cars={cars} />
        </div>
    )
}

export default Sedan;