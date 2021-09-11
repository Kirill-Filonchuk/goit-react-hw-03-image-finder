import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({webformatURL, tags}) {
  // console.log({ ...prop });
  // console.log(webformatURL);
    return (
       <li className={s.ImageGalleryItem}>
      <img src={webformatURL} alt={tags} className={s.ImageGalleryItemImage} />
      </li>
    )
    
}