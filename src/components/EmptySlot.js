import React, {useEffect} from "react";

function EmptySlot (props) {
    useEffect(() => {
        let random_time = (Math.random() * 2000)
        let timer = setTimeout(() => {
            props.setDisplayMole(true)
        }, random_time)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img src='hill.jpg' width='300px' draggable={false}/>
        </div>
    )
}

export default EmptySlot