import { useState } from "react";

function Counter() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);
    return (
        <>
            <p>Step: </p>
            <button onClick={() => {if (step > 1) setStep(step - 1)}}>-</button>
            <p>{step}</p>
            <button onClick={() => setStep(step + 1)}>+</button>
            <br />
            <p>Counter: </p>
            <button onClick={() => setCount(count - step)}>-</button>
            <p>{count}</p>
            <button onClick={() => setCount(count + step)}>+</button>
        </>
    );
}

export default Counter;