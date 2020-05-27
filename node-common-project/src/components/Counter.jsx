import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    let msg = (count<18) ? 'Not legal age' : 'Legal age';
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=> setCount(count + 1)}>Add 1</button>
            <p>{msg}</p>
        </div>
    )
}
export default Counter
