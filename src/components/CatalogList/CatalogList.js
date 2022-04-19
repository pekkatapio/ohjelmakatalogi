import CatalogListItem from '../CatalogListItem';
import styles from './CatalogList.module.css';

function CatalogList(props) {
  return (
    <div style={styles.cataloglist}>
      { props.list.map(item => (<CatalogListItem data={item} />)) }  
    </div>
  )
}

export default CatalogList;