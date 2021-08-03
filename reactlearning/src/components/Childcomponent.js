import React from 'react'

function Childcomponent(props) {
    return (
        <div>
            <button onClick={() => props.greethandler('Deepak')}>Greet parent</button>
        </div>
    )
}

export default Childcomponent
