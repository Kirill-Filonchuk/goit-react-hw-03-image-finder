import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({largeImageURL,webformatURL, tags, imgPastToModal}) {
  // console.log({ ...prop });
  // console.log('modal', modal);
  // console.log({ largeImageURL, tags });
  // console.log('imgPastToModal', imgPastToModal);
    return (
      <li className={s.ImageGalleryItem} onClick={()=> imgPastToModal({ largeImageURL, tags })}>
      <img src={webformatURL} alt={tags} className={s.ImageGalleryItemImage} />
      </li>
    )
    
}