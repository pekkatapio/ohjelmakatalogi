import styles from './Icon.module.css';

function Icon(props) {
  return <span className={styles.icon} title={props.title}>{props.icon}</span>
}

export default Icon;