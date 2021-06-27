import React, { useState } from 'react'

function Hello({ onClick, style }) {



    return (
        <div style={style}>
            {/* <button onClick={() => setHe(!he)} style={{ display: he ? 'none' : 'block' }}>he</button>
            <button onClick={() => setHe(!he)} style={{ display: !he ? 'none' : 'block' }}>she</button> */}
            <h1>hello1</h1>
            <button onClick={onClick}>comp1</button>
        </div>
    )
}

export default Hello
