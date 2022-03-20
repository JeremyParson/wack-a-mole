import React, {useEffect} from "react";

function Mole (props) {

    useEffect(() => {
        let random_time = (Math.random() * 2000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, random_time)
        return () => clearTimeout(timer)
    })

    return (
        <div onClick={props.handleClick}>
            <img src='mole.png' width='300px' draggable={false}/>
        </div>
    )
}

export default Mole