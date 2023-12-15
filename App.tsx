import React from "react"

export default function App() {
    const [ count, setCount ] = React.useState<number>(0);
    return <div>
        Hello worlds
        <div onClick={() => {
            setCount(i => i + 1);
        }}>Count is { count }</div>
    </div>
}