import React from 'react'
import withCounter from './WithCounter';

function ClickCounter({counter, incrementCounter}) {

    return (
             <button onClick={()=>incrementCounter()}>Counter: {counter} times</button>
    )
}

export default withCounter(ClickCounter)
