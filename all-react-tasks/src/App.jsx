import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import P from './components/P/P';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Button count={count} setCount={setCount}>-</Button>
            <P>{count}</P>
            <Button count={count} setCount={setCount}>+</Button>
        </>
    );
}

export default App;
