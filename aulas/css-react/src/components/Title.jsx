import styles from './Title.module.css';

const Title = () => {
  return (
    <div>
        <h1 className={styles['my_title']}>My title</h1>
        <h1 className={styles.my_title}>My title</h1>
    </div>
  );
};

export default Title;