import { useState } from "react";

const ManageData = () => {
    let value = 10;

    const[number, setNumber] = useState(10);

    console.log(number);

    return (
        <div>
            <div>
                <p>Value: {value}</p>
                <button  onClick={() => (value = 15)}>Alter value</button>
            </div>
            <div>
                <p>Value: {number}</p>
                <button onClick={() => setNumber(15)}>Alter value</button>
            </div>
        </div>
    );
};

export default ManageData;