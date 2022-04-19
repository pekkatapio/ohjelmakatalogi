import styles from './CatalogListItem.module.css';
import Card from '../Card';
import SystemIcon from '../SystemIcon';

function CatalogItem(props) {
  return (
    <Card>
      <div className={styles.catalogitem}>
        <div className={styles.catalogitem_icon}><img src={props.data.icon} /></div>
        <div className={styles.catalogitem_data}>
          <h2>{props.data.name}</h2>
          <div className={styles.catalogitem_license}>
            <div>{props.data.license}</div>
            <div className={styles.catalogitem_system}>{props.data.system.map(system => <SystemIcon id={system} />)}</div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CatalogItem;