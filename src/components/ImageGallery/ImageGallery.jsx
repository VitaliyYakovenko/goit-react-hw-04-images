import { useState,useEffect } from "react";
import PropTypes from 'prop-types';
import NewsApi from "pixabay-api/pixabay-api";
import Loader from "components/Loader/Loader";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";
import css from "./ImageGallery.module.css";


const objNews = new NewsApi();


export default function ImageGallery({value}){

    const [img, setImg] = useState([]);
    const [status, setStatus] = useState("idle");
    const [page, setPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [modalImg, setModalImg] = useState(null);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (value === "") {
          return
      }

        setShowModal(false);
        setStatus("pending");
        
        objNews.resetPage();
        objNews.inputValue = value;
        objNews.getNews()
        .then((pic) => {
            setImg([...pic.hits])
            setTotal(pic.totalHits)
            setStatus("resolved")
            setPage(1);
        })


     },[value])
     
    useEffect(() => {
        
        if (page > 1) {
            setStatus("loading")
            objNews.getNews()
            .then((pic) => {
                setImg(prev => [...prev, ...pic.hits])
                setStatus("resolded")
            })
        }

            
    }, [page])
    
    

    const onGetImgPage = () => {
        setPage((prev) => prev + 1);
    }
    
    const onepModal = (e) => {
        if (e.target.nodeName === "IMG") {
        const { img } = e.target.dataset;
        setShowModal(true);
        setModalImg(img);    
   
     }
    }

    const closeModal = (e) => {
        setShowModal(false);
    }
        
    if (status === "idle") {
            return (<p className={css.enterWord}>Введите слово</p>);
        }
    if (status === "pending") {
            return (<Loader/>);
        }
    if (img.length === 0) {
            return (<p className={css.error}>Ничего не найдено</p>);
        }
    if (img.length < 12 || img.length >= total) {
            return (
                <ul className={css.ImageGallery} onClick={onepModal}>
            <ImageGalleryItem pictures={img}/>
            {showModal && <Modal closeModal={closeModal} modalImg={modalImg} />}
                </ul>    
            )
        }
    if (img.length !== 0 || status === "resolved" || "loading") {          
            return (
            <>
            <ul className={css.ImageGallery} onClick={onepModal}>        
            <ImageGalleryItem pictures={img} />
            </ul>            
            {status === "loading"
            ? <Loader/>
            : <Button
            onSubmit={onGetImgPage} page={page}/>}
            {showModal && <Modal closeModal={closeModal} modalImg={modalImg} />}
            </>        
            );
        }
}

ImageGallery.propTypes = {
        value: PropTypes.string.isRequired,
    }









    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    