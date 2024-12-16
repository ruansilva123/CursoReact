// COMPONENTS
import FirstComponent from "./components/FirstComponent";
import TemplateExpessions from "./components/TemplateExpressions";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";
import Challenge from "./components/Challenge";

// STYLES / CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="hello-word">Hello World</h1>
      <FirstComponent />
      <TemplateExpessions />
      <MyComponent />
      <Events />
      <Challenge />
    </div>
  );
};

export default App;