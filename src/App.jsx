import React from 'react'
import { useState, useEffect } from 'react';

function App() {
    let color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
    let [bgCol, setBgCol] = useState();
    let [intervalId, setIntervalId] = useState();
    function randomCol() {
        let c = "#";
        for (let i = 0; i < 6; i++) {

            c += color[Math.floor(Math.random() * 16)]
        }
        return c;
    }
    function bgChange() {
        // setBgCol(randomCol)
        // document.body.style.backgroundColor = bgCol;
    }

    const startChanging = () => {
        if (!intervalId) {
            const id = setInterval(() => {
                const color = randomCol()
                setBgCol(color)
                // document.body.style.backgroundColor =color;
            }, 1000);
            setIntervalId(id)
        }
    }
    function stopper() {
        clearInterval(intervalId)
        intervalId = null;
    }

    useEffect(() => {
        document.body.style.backgroundColor = bgCol;
    }, [bgCol])

    return (
        <>
            <span>Color: {bgCol}</span>
            <div >
                {/* <button onClick={bgChange}>Change</button> */}
                <button onClick={startChanging}>Start</button>
                <button onClick={stopper}>Stop</button>
            </div>
        </>

    )
}

export default App