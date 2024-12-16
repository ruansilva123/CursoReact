const TemplateExpessions = () => {

    const name = "Ruan"
    const data = {
        age: 19,
        job: "Programer"
    }

    return(
        <div>
            <h1>Hello, my name is {name}</h1>
            <h1>I am a {data.job}</h1>
            <p>{console.log("JSX React")}</p>
        </div>
    );
};

export default TemplateExpessions;