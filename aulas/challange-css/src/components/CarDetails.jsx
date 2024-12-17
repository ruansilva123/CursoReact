import styles from './CarDetails.module.css';

const CarDetails = (props) => {
  return (
    // <input {...props} />
    <div className={styles.catalog}>
        <h2>{props.brand}</h2>
        <p>Price: {props.price}</p>
        <p>Km: {props.km}</p>
        {props.km === 0 ? (<p className={styles.new_car}>It is a new car</p>) : null}
    </div>
  );
};

export default CarDetails;