import '../App/App.css';
import React, { Component } from 'react';

import { ToastContainer } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import Loader from 'react-loader-spinner';

import pixApi from '../../utils/pixApi';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Button from '../Button';

//////////////
injectStyle();
//////////////

class App extends Component {
  state = {
    pixData: [],
    page: 1,
    searchRequest: '',
    isLoaded: false,
    error: null,
    isTherePix: false,
  };
  //look for the ansver from API if 0 - then 'ничего не нашли' кнопка ЛОАД-МОРЕ НЕ рендерить. Если пустая строка, то Рандомн картинки
  componentDidMount() {
    this.fetchPixData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchRequest !== this.state.searchRequest) {
      this.fetchPixData();
    }
  }

  fetchPixData = () => {
    const { searchRequest, page } = this.state;
    const options = { searchRequest, page };

    this.setState({ isLoaded: true });

    pixApi
      .fetchPixData(options)
      .then(pix => {
        this.setState(prevState => ({
          pixData: [...prevState.pixData, ...pix],
          page: prevState.page + 1,
        }));
        console.log(pix.length);
        pix.length < 1 ? this.setState({ isTherePix: true }) : this.setState({ isTherePix: false });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoaded: false }));
  };

  onSubmit = searchRequest => {
    console.log('App-', searchRequest);
    this.setState({
      searchRequest,
      page: 1,
      pixData: [],
      error: null,
    });
    console.log('this.state -', this.state.searchRequest);
  };

  render() {
    const { pixData, isLoaded, isTherePix, error } = this.state;
    const shouldRenderLoadMoreButton = pixData.length > 0 && pixData.length > 11 && !isLoaded;
    return (
      <div className="container">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery searchRequest={pixData} />
        {error && <h1>Ошибка!!!</h1>}
        {isTherePix && <h1>Картинок по Вашему запросу не найдено!</h1>}
        {isLoaded && (
          <div>
            <Loader
              type="Circles"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs Grid
            />
          </div>
        )}
        {shouldRenderLoadMoreButton && <Button LoadMore={this.fetchPixData} />}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
