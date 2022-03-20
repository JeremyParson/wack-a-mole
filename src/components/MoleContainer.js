import React, { useState } from "react";
import EmptySlot from "./EmptySlot";
import Mole from "./Mole";

function MoleContainer (props) {
    let [displayMole, setDisplayMole] = useState([false])

    const bop = () => {
        props.setScore(props.score + 1)
        setDisplayMole(false)
    }

    const display = () => 
        displayMole? <Mole setDisplayMole={setDisplayMole} handleClick={bop}/> 
        : <EmptySlot setDisplayMole={setDisplayMole}/>

    return (
        <div>
            <h2>This is a mole hill</h2>
            {display()}
        </div>
    )
}

export default MoleContainer