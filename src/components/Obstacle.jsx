
import React, { useState, useEffect } from 'react';
import obstacle from '../images/obstacle.png';

function Obstacle(props) {

    // console.log(props.position)
    const [leftPos,setLeftPos] = useState(325)
    // useEffect(() => {
    //     if (props.position.left > leftPos) {
    //         const newPosition = Math.floor(Math.random() * (550 - 100 + 1)) + 100; // Generate random position between 150 and 550
    //         setLeftPos(newPosition);
    //     }
    // }, [props.position.left, leftPos]);

    
    return (
        <div>
            <img src={obstacle} alt="Obstacle" className="obstacle-image" style={{ left: `${leftPos}px` }} />
        </div>
    );
}

export default Obstacle;
