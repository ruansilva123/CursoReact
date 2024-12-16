const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Activate event");
    };

    const renderSomething = (x) => {
        if(x) {
            return <h1>Render h1</h1>;
        } else {
            return <h2>Render h2</h2>;
        };
    };

    return(
        <div>
            <div>
                {/* active when clicking the button */}
                <button onClick={handleMyEvent}>Click here!</button>
                {/* active when reading button */}
                <button onClick={handleMyEvent()}>Click here!</button>
            </div>
            <div>
                <button onClick={() => console.log("Cliked")}>Click here too</button>
            </div>
            <div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    );
};

export default Events;