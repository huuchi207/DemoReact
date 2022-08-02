import React from "react";
import { useOutletContext } from "react-router-dom";
import Coupleslists from "../component/Homepage/Carlist/Coupleslists";
function Couples() {
    const {couples} = useOutletContext();
    return (
        <div>
            <Coupleslists couples={couples} />
        </div>
    )
}

export default Couples;