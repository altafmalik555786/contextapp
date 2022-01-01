import React from 'react'
import withCounter from './WithCounter';

function HoverCounter({counter, incrementCounter}) {
    return (
        <div>
            <button onMouseOver={()=>incrementCounter()}>Counter {counter} times</button>
        </div>
    )
}

export default withCounter(HoverCounter)
