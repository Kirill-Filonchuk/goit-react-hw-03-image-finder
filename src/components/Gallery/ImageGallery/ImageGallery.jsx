import React from 'react';

import shortid from 'shortid';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

export default function ImageGallery({ searchRequest, imgPastToModal }){
// console.log('imgPastToModal', imgPastToModal);
  // console.log('ImgGal', { searchRequest });
    return (
          <ul className={s.ImageGallery}>
            {searchRequest.map(ImageCard => (
              <ImageGalleryItem {...ImageCard} imgPastToModal={imgPastToModal} key={shortid.generate()} />
            ))}
          </ul>
    
    );
  }


  
////////////////modal={this.imgPastToModal} imgPastToModal={this.imgPastToModal}
// ОТСЛЕЖИВАТЬ
// id - уникальный идентификатор
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL
///////////