import styles from './Label.module.css';
import classnames from 'classnames';

function Label(props) {
  
  let classes = [styles.label];

  switch (props.kind) {
    case 'magenta':
      classes.push(styles.label_magenta);
      break;
    case 'darkmagenta':
      classes.push(styles.label_darkmagenta);
      break;
    case 'cyan':
      classes.push(styles.label_cyan);
      break;
    case 'darkcyan':
      classes.push(styles.label_darkcyan);
      break;
    case 'green':
      classes.push(styles.label_green);
      break;
    case 'grey':
      classes.push(styles.label_grey);
      break;
    case 'lightgrey':
      classes.push(styles.label_lightgrey);
      break;
    case 'darkgrey':
      classes.push(styles.label_darkgrey);
      break;
  }

  return <div className={classnames(classes)}>{props.icon?<div>{props.icon}</div>:null} <div>{props.text}</div></div>    
}

export default Label;