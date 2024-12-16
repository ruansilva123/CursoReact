const Challenge = () => {
    const number1 = 5;
    const number2 = 14;

    const handleSumValues = (e) => {
        console.log(number1 + number2);
    }

    return(
        <div>
            <button onClick = {handleSumValues}>Sum values</button>
            <p>{number1 + number2}</p>
        </div>
    );
};

export default Challenge;