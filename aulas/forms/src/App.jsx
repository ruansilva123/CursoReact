import './App.css';
import MyForm from './components/MyForm';

function App() {

  return (
    <>
      <h1>Forms</h1>
      <MyForm user={{name: "Ruan", email: "ruan@gmail.com"}}/>
    </>
  );
};

export default App;
