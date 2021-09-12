import React from 'react';

import shortid from 'shortid';
import s from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ searchRequest }){

  console.log('ImgGal', { searchRequest });
    return (
          <ul className={s.ImageGallery}>
            {searchRequest.map(ImageCard => (
              <ImageGalleryItem {...ImageCard} key={shortid.generate()} />
            ))}
          </ul>
    
    );
  }


  
////////////////
// ОТСЛЕЖИВАТЬ
// id - уникальный идентификатор
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL
///////////