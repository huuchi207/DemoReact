import React from "react";
import { useOutletContext } from "react-router-dom";
import Sedanlists from "../component/Homepage/Carlist/Sedanlists";
function Sedan() {
    const {sedan} = useOutletContext();
    return (
        <div>
            <Sedanlists sedan={sedan} />
        </div>
    )
}

export default Sedan;