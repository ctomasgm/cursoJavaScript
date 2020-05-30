import React, {useState, useEffect} from 'react'

const Bulbs = (props) => {
    const [bulbState, setBulbState] = useState(false)
    const [ubication, setUbication] = useState()

    const switchBulb = () => {
        setBulbState(bulbState => !bulbState);
    }

    useEffect(() => {
        setUbication(props.ubication)
    });

    return (
        <div>
            <img src = {bulbState ? "images/bulbOn.png" : "images/bulbOff.png" }
            onClick = {switchBulb} 
            alt = "bulb"
            width="100" height="110"/>
                <div className = "caja">{ubication}<br></br>
                {bulbState ? "ON" : "OFF"}
                </div>

        </div>
    )
}

export default Bulbs

