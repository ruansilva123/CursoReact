import { useState } from "react";

const ConditionalRender = () => {
    const [x] = useState(false);

    const [name, setName] = useState("João")

    return (
        <div>
            <div>This will be displayed?</div>
            <h3>Common if</h3>
            {x && <p>x is true!</p>}
            {!x && <p>Now, x is false!</p>}
            <h3>Ternary if</h3>
            {name === "João" ? (
                <p>the name is João</p>
            ) : (
                <p>The name is not João</p>
            )}
            <button onClick={() => setName("Ruan")}>Click here</button>
        </div>
    );
};

export default ConditionalRender;