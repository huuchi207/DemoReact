import React from "react";
import { useOutletContext } from "react-router-dom";
import Suvlists from "../component/Homepage/Carlist/Suvlists";
function Suv(){
    const {suv} = useOutletContext();
    return (
        <div>
            <Suvlists suv={suv} />
        </div>
    )
}

export default Suv;