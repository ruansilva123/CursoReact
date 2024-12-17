const DestructuringProps = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h2>Car details</h2>
        <ul>
            <li>Brand:  {brand}</li>
            <li>KM:  {km}</li>
            <li>Color:  {color}</li>
        </ul>
        {newCar && <p>This is a new car!</p>}
    </div>
  );
};

export default DestructuringProps;