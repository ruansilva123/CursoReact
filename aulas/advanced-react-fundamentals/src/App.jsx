import { useState } from 'react';
import './App.css';
import AssetsImage from './assets/assets-image.jfif';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import Props from './components/Props';
import DestructuringProps from './components/DestructuringProps';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const name = "Props Fulano";
  const [userName] = useState("Ciclano State");

  const cars = [
    {id: 1, brand: "Ferrari", color: "Yellow", newCar: true, km: 0},
    {id: 1, brand: "KIA", color: "White", newCar: false, km: 1200},
    {id: 1, brand: "Renault", color: "Blue", newCar: true, km: 0}
  ];

  function showMessage() {
    console.log("Evento do componente pai");
  };

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const usersChallenge = [
    {name: "Ruan Carlos", age: 19, job: "Aprendiz em soluções digitais"},
    {name: "Ciclano Costa", age: 17, job: "Aprendiz em solda"},
    {name: "Fulano Silva", age: 16, job: "Mecânico"}
  ]

  return (
    <>
      <h1>Advancing in React</h1>
      {/* Image in public */}
      <div>
        <img src="/public-image.jfif" alt="Public image" />
      </div>
      {/* Image in assets */}
      <div>
        <img src={AssetsImage} alt="Assets image" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <Props name="Ruan" />
      <Props name={name} />
      <Props name={userName} />
      {/* destructuring props */}
      <DestructuringProps brand="VW" km={100000} color="blue" newCar={false}/>
      <DestructuringProps brand="Ford" km={0} color="red" newCar={true}/>
      <DestructuringProps brand="Fiat" km={4500} color="gray" newCar={false}/>
      {/* loop in objects array */}
      {cars.map((car) => (
        <DestructuringProps 
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar}
        />
      ))}
      {/* Fragments */}
      <Fragments title="Title prop" />
      {/* prop children */}
      <Container text="some text">
        <p>It is a container content</p>
      </Container>
      {/* Execute function */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage} />
      {/* Challenge number four */}
      <h2>Challenge Number Four</h2>
      {usersChallenge.map((user) => (
        <UserDetails name={user.name} age={user.age} job={user.job} />
      ))}
    </>
  );
};

export default App;
