function Button({children, count, setCount}) {
    return (
        <button onClick={() => children === '-' ? setCount(count - 1) : setCount(count + 1)}>{children}</button>
    );
}

export default Button;