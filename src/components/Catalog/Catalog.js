import { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingSpinner from '../../components/LoadingSpinner';
import styles from './Catalog.module.css';
import CatalogList from '../../components/CatalogList';
import useForm from '../../hooks/useForm';
import Toggle from '../../components/Toggle';

function Catalog(props) {
 
  let [catalog, setCatalog] = useState([]);
  let [isDataLoaded, setDataLoaded] = useState(false);
  let [isFiltersVisible, setFIlterVisible] = useState(false);
  let [filteredCatalog, setFilteredCatalog] = useState([]);
  
  const submit = () => {
    console.log("hakua pukkaa!", values.text);
    if (values.text) {
      console.log("filteröintiä kukkaan!");
      let text = values.text.toLowerCase();
      setFilteredCatalog(catalog.filter(resource => (resource.name.toLowerCase().includes(text) || resource.desc.toLowerCase().includes(text))));
    } else {
      setFilteredCatalog(catalog);
    }
  }

  const initialdata = {text: ""};

  const {values, handleChange, handleSubmit} = useForm(submit, initialdata, false);

  useEffect( () => {
    axios.get(process.env.REACT_APP_DATA_URL)
    .then( result => {
      const catalogdata = result.data;      
      setCatalog(catalogdata);
      setFilteredCatalog(catalogdata);
      setDataLoaded(true);
    })
  }, []);

  function findUniqueValues(list, key) {
    let values = [];
    list.forEach(listitem => {
      let value = listitem[key];
      if (Array.isArray(value)) {
        value.forEach(valueitem => {
          if (valueitem && !values.includes(valueitem)) {
            values.push(valueitem);        
          }          
        })
      } else {
        if (value && !values.includes(value)) {
          values.push(value);        
        }
      }
    }) 
    values.sort();
    return values;
  }


  if (isDataLoaded) {

    let systems = findUniqueValues(catalog, 'userg');
    console.log(systems);

    return (
      <div>
        <h1>Kaikki ohjelmat</h1>
        <form onSubmit={handleSubmit}>
        <div className={styles.haku}>
          <div>
            <input type="search" className={styles.haku_teksti} name='text' placeholder='Hae nimestä tai kuvauksesta' onChange={handleChange} value={values.text} />
            <input className={styles.haku_nappi} type='submit' name='search' value='Hae' />
            <Toggle name="toka" isOn={isFiltersVisible} handleToggle={ () => {setFIlterVisible(!isFiltersVisible)} } onColor="#B32D84" />
          </div>
          <div className={isFiltersVisible ? styles.testi : styles.testihidden}>
            Tämä laatikko tulee sisältämään suodatusvaihtoehtoja..
          </div>
        </div>
        
        </form>
        <CatalogList list={filteredCatalog}/>
      </div>
    );
  } else {
    return (
      <div className={styles.catalog_loading}>
        <LoadingSpinner />
        <div>Odota hetki, ladataan tietoja..</div>
      </div>
    );
  }
  
}

export default Catalog;