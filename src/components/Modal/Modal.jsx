import {useEffect} from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import css from "./Modal.module.css"
const modalRoot = document.getElementById("modal-root");


export default function Modal({modalImg, closeModal}) {
     
    useEffect(() => {
       
     const hendleKeydown = (e) => {
        if (e.code === "Escape") {
        closeModal();
        }
      } 

        window.addEventListener("keydown", hendleKeydown);
       
        return (() => {
         return   window.removeEventListener("keydown", hendleKeydown)
        }); 
    }, [closeModal])

   
  const hendBackropClick = (e) => {
        if (e.currentTarget === e.target) {
           closeModal()
       }
     }
    
    return createPortal(
        <div onClick={hendBackropClick} className={css.overlay}>
            <div className={css.modal}>
                <img src={modalImg} data-img={modalImg} alt="modal-img" width="800" />
            </div>
        </div>, modalRoot);
          
}


Modal.propTypes = {
        modalImg: PropTypes.string.isRequired,
        closeModal: PropTypes.func.isRequired,
    }





