import styles from './Icon.module.css';

function Icon(props) {
  return <span className={styles.icon}>{props.icon}</span>
}

export default Icon;