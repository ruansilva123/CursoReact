import './App.css'
import CarDetails from './components/CarDetails';

function App() {

  const cars = [
    {brand: "Porsche", price: 759000.99, km: 0},
    {brand: "Honda", price: 582000.99, km: 200000},
    {brand: "VW", price: 18900, km: 0},
    {brand: "Ferrari", price: 2759000.99, km: 0}
  ];

  return (
    <>
      <h1>Cars in catalog</h1>
      {cars.map((car) => (
        <CarDetails brand={car.brand} price={car.price} km={car.km} />
      ))}
    </>
  );
};

export default App;