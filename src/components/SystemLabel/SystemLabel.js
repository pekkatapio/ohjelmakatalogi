import Label from '../Label';
import icons from '../../config/systemicons';

function SystemLabel(props) {

    // Selvitetään ikonitaulukon alkion indeksi.
    let index = icons.findIndex(item => (item.id === props.id));
  
    // Jos ikoni löytyy, niin muodostetaan kuvallinen merkki, 
    // muuten pelkällä tekstillä.
    if (index >= 0) {
      let icon = icons[index];
      return <Label icon={icon.icon} text={icon.title} />;  
    } else {
      return <Label text={props.id} />; 
    }
  
}

export default SystemLabel;