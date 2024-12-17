import "./MyComponent.css";

const MyComponent = () => {
  return (
    <div>
        <h1>CSS in component</h1>
        <p>This is a component paragraph</p>
        <p className="my-comp-paragraph">This is a component paragraph too</p>
    </div>
  );
};

export default MyComponent;