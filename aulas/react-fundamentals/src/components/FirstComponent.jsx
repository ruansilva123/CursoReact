// Test coment

import MyComponent from "./MyComponent";

const FirstComponent = () => {
    // This function make this

    return(
        <div>
            {/* comment in JSX */}
            <h1>My first component</h1>
            <p className="text">My text</p>
            <MyComponent />
        </div>
    );
};

export default FirstComponent;