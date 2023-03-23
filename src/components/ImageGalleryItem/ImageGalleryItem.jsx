import PropTypes from 'prop-types'
import css from "./ImageGalleryItem.module.css"


export default function ImageGalleryItem({pictures, onepModal}) {

    return (
        pictures.map(pictur => (
          <li className={css.ImageGalleryItem} onClick={onepModal} key={pictur.id}>
            <img className={css.ImageGalleryItemImage} src={pictur.webformatURL} alt={pictur.tags} width="75"
            data-img={pictur.largeImageURL} />
           </li>
        ))
      )
};




ImageGalleryItem.propTypes = {
     pictures: PropTypes.arrayOf(
       PropTypes.shape({
         id: PropTypes.number.isRequired,
         webformatURL: PropTypes.string.isRequired,
         tags: PropTypes.string.isRequired,
       })
  ),
  onepModal: PropTypes.func,
  }









