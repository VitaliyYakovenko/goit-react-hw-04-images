import {useState}  from "react";
import Searchbar from "./Searchbar/Searchbar"
import ImageGallery from "./ImageGallery/ImageGallery";
import css from "./App.module.css"



export default function App() {
  const [imgName, setImgeName] = useState("");
  
   const onGetImgName = (imgName) => {
     setImgeName(imgName);
   }

     return (
      <div className={css.app}>
      <Searchbar onSubmit={onGetImgName} />
      <ImageGallery value={imgName} />
      </div>
    )
  }

