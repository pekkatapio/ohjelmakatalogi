import styles from './Label.module.css';

function Label(props) {
  return <div className={styles.label}>{props.icon?<div>{props.icon}</div>:null} <div>{props.text}</div></div>    
}

export default Label;