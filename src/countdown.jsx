import React, { useState } from 'react'
import App from './App';


const Countdown = () => {
    const [a, seta] = useState(0)
    function Increase() {
        seta(a + 1)
    }

    function Decrease() {
        seta(a - 1);
    }

    const [ci, setci] = useState({user: 'Avinash', age:25})
    function Callme(){
        const newNum = {...ci}
        newNum.user = 'Abhisehk'
        newNum.age = 20
        setci(newNum)
    }
    return (
        <div className='A1'>
            <div className='A'>
                <h1>{a}</h1>
                <h1>{ci.user}, {ci.age}</h1>
            </div>

             <div className='btns'>
                <button onClick={Increase}>Increse</button>
                <button onClick={Decrease}>decrease</button>
                <button onClick = {Callme}>Spread Opr</button>
            
            </div>
            <App/>
        </div>
    )
}



export default Countdown