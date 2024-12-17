import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 15;
  const redTitle = false;

  return (
    <div className='App'>
      {/* global CSS */}
      <h1>React with CSS</h1>
      {/* component CSS */}
      <MyComponent />
      <p>This is a App.jsx paragraph</p>
      {/* inline CSS */}
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>
        This element was styled with inline CSS
      </p>
      {/* dynamic inline CSS */}
      <p style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>
        This element was styled with dynamic inline CSS
      </p>
      <p style={n < 10 ? ({color: "purple"}) : null}>
        This element was styled with dynamic inline CSS
      </p>
      {/* dinamic class */}
      <h2 className={redTitle ? "red-title" : "title"}>This title have dinamic class</h2>
      {/* CSS modules */}
      <Title />
      <h1 className='my_title'>My title</h1>
    </div>
  );
};

export default App;
