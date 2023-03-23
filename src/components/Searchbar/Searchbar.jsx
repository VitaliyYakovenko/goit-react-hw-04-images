import { useState } from "react";
import PropTypes from 'prop-types';
import css from "./Searchbar.module.css";


export default function Searchbar ({onSubmit})  {
  const [imgName, setImgeName] = useState("");    
  
  const hendleNameChange = (e) => {
    setImgeName(e.target.value.toLowerCase())
  }

  const onGetImgName = (e) => {
      e.preventDefault();
      if (imgName.trim() === "") {
        alert("Введите имя запроса")
        return;
      }

      onSubmit(imgName);
  
      setImgeName("");
    }
   

    return (
        <header className={css.searchbar}>
        <form onSubmit={onGetImgName} className={css.searchbarForm}>
        <button type="submit" className={css.searchFormButton}>
        <span >Search</span>
        </button>
        <input
        onChange={hendleNameChange}
        className={css.searchFormInput}
        type="text"
        value={imgName}          
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        />
        </form>
        </header>
        )
    }

  Searchbar.propTypes = {
   onSubmit: PropTypes.func.isRequired,
 };
  
