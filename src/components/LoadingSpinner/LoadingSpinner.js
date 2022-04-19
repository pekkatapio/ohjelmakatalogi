import styles from './LoadingSpinner.module.css';

// Latausanimaatio on kopioitu https://loading.io/css/ -sivustolta.

function LoadingSpinner() {
    return (
        <div className={styles.grid}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    );
}

export default LoadingSpinner;