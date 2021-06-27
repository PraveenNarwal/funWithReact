import React from 'react'

import { useMemo, useState } from "react";


/*
    1. Create a "input" with type="number" and with class="number".
    2. on change "input", update inputVal state (you can find this in code).
    3. Create a "button" with text "Get Result".
    4. on Click that button update number state with value equal to inputVal.
    5. Create a "div" with class="result" which should print result.

Use useMemo hook to prevent re calculation on result.
*/

function First() {
    const [number, setNumber] = useState(0);
    const [inputVal, setInputVal] = useState(0);
    // use useMemo hook for multiplier which should re calculate only if number changes
    const result = useMemo(function multiplier() {
        console.log("called");
        return number * 10;
    });



    return (
        <React.Fragment>
            {/* write your code here */}
            <input type="number" onChange={(e) => setInputVal(e.target.value)} className="number" />
            <button onClick={() => setNumber(inputVal)}>Get Result {number}</button>
            <div className="result"> {result}</div>
        </React.Fragment>
    );
};
export default First
