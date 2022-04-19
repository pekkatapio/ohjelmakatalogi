import { useState } from 'react';

// Custom hook, jota käytetään lomakkeen tietojen tallentajana ja 
// submit-käsittelijänä. Pohja lainattu sivulta:
// https://upmostly.com/tutorials/using-custom-react-hooks-simplify-forms/
const useForm = (callback, initialState={}, reset=true) => {
    
    // Esitellään state-hook-olio, johon käyttäjän lomakkeelle
    // syöttämä tieto tallennetaan.
    const [values, setValues] = useState(initialState);

    // Submit-käsittelijä, joka estää oletustoiminnan ja 
    // kutsuu määriteltyä callback-funktiota.
    const handleSubmit = (event) => {
      if (event) {
        event.preventDefault();
      }
      callback();
      if (reset) resetValues();
    }

    // Syötekäsittelijä, joka tallentaa kentän tiedot 
    // sen nimellä state-olioon.
    const handleChange = (event) => {
      event.persist();
      // Tallennetaan lomakkeen tieto välimuuttujaan.
      let value = event.target.value;
      // Tallennetaan uusi arvo state-olioon.
      setValues(values => ({...values, [event.target.name]: value}));
    }

    // Funktio, joka palauttaa lomakkeen tiedot alkutilanteeseen.
    const resetValues = () => {
      setValues(initialState);
    }

    // Palauta luonnin yhteydessä sekä käsittelijät että
    // state-olio.
    return {
      handleSubmit,
      handleChange,
      resetValues,
      setValues,
      values
    };
  }

  export default useForm;