import {FaAndroid} from 'react-icons/fa';
import {FaApple} from 'react-icons/fa';
import {FaLinux} from 'react-icons/fa';
import {FaRegWindowMaximize} from 'react-icons/fa';
import {FaWindows} from 'react-icons/fa';

/* 
  Tähän taulukkoon määritetään käytettävissä olevat järjestelmät.

  id      Tunniste, jolla järjestelmä esiintyy lähdedatassa.
  icon    Järjestelmää vastaava ikoni React Icons -kirjastossa.
  title   Otsikkoteksti, joka tulostetaan ikonin yhteydessä tai
          ikonin ponnahdustekstinä.
*/

const icons = [
  { id: 'Android', 
    icon: <FaAndroid/>, 
    title: 'Android'
  },    
  { id: 'Linux', 
    icon: <FaLinux/>, 
    title: 'Linux'
  },
  { id: 'OSX', 
    icon: <FaApple/>, 
    title: 'OSX'
  },
  { id: 'web', 
    icon: <FaRegWindowMaximize />, 
    title: 'web'
  },
  { id: 'Windows', 
    icon: <FaWindows/>, 
    title: 'Windows'
  },
];
  
export default icons;