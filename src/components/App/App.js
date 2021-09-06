import '../App/App.css';
import React, { Component } from 'react';
// import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
// import Button from '../Button';
// import shortid from 'shortid';

////////////////
// ОТСЛЕЖИВАТЬ
// id - уникальный идентификатор
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL
///////////

//////////////
injectStyle();
class App extends Component {
  state = {
    // status: 'idle',
    // error: null,

    searchRequest: '',
    // Запрос с Сабмита формы и далее проброс-ПРОПОМ в Searchbar
  };
  //look for the ansver from API if 0 - then 'ничегоне нашли' кнопка ЛОАД-МОРЕ НЕ рендерить. Если пустая строка, то Рандомн картинки
  componentDidMount() {
    // this.setState({ isLoaded: true });
  }

  onSubmit = searchRequest => {
    console.log('App', searchRequest);
    this.setState({ searchRequest });
    console.log('this.state', this.state.searchRequest);
  };

  render() {
    return (
      <div className="container">
        {/* {this.state.searchRequest && <h1>{this.state.searchRequest}</h1>}
        <ul>
          {this.state.searchRequest &&
            this.state.searchRequesty.map((pix, index) => <li key={index}>{pix.user}</li>)}
        </ul> */}
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery searchRequest={this.state.searchRequest} />
        {/* <Searchbar onSubmit={onSubmit} /> // Форма с локальным СТэйтом (где храним - пока набираем ИНПУТ)

        <ImageGallery /> // наверное здесь и будет и Рендеринг и Запрос

        <Button /> Где рендерить?*/}
        {/* <Button /> */}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
