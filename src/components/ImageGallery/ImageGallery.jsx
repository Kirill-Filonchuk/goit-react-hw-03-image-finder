import React, { Component } from 'react';
import axios from 'axios';
import shortid from 'shortid';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from '../Button';

const URL = 'https://pixabay.com/api/';
const KEY = '22443315-0655a572bf532c2d4a9d9c050';
// const page = '1';

export default class ImageGallery extends Component {
  state = {
    pixData: null,
    isLoaded: false,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    // Обязательно делать проверки изменения стейта, && prevState.page !== this.state.pageпропса
    if (
      prevProps.searchRequest !== this.props.searchRequest ||
      prevState.page !== this.state.page
    ) {
        if(
            !this.props.searchRequest ||
            prevProps.searchRequest !== this.props.searchRequest
            ) {
            this.setState({
                pixData: null,
                page: 1,
              });           
        }
      this.setState({ isLoaded: true });
      console.log('prevProps.searchRequest', prevProps.searchRequest);
      console.log('this.props.searchRequest', this.props.searchRequest);

      axios
        .get(
           `${URL}?q=${this.props.searchRequest}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
        )
        .then(res => {
          let myData = res.data.hits;
          if(this.state.pixData){myData.push(...this.state.pixData)}
          if(myData.length<0){
            this.setState((state) => (
                state = {
                pixData: null,
                    // page: 1
              }));
              return
          }
        //   this.state.pixData? myData.push(this.state.pixData): myData;
          const lenGth = myData.length;
          console.log('data', myData);
          console.log('lenGth', lenGth);
          this.setState({
            pixData: myData,
          });
        })
        .finally(() => this.setState({ isLoaded: false }));
    }
  }
  //Здесь? LoadMore ???
  LoadMore = event => {
    console.log(this.state.page);
    console.log(event.currentTarget.name);
    this.setState(() => ({
      page: this.state.page + 1,
    }));
  };

  render() {
    const { pixData, isLoaded } = this.state;

    return (
      <>
        {isLoaded && (
          <div className={s.Spiner}>
            <Loader
              type="Circles"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs Grid
            />
          </div>
        )}

        {!isNaN(pixData) && <h2>Введите Ваш запрос</h2>}
        {pixData && (
          <ul className={s.ImageGallery}>
            {pixData.map(prop => (
              <ImageGalleryItem {...prop} key={shortid.generate()} />
            ))}
          </ul>
        )}
        {isNaN(pixData) &&
        <Button LoadMore={this.LoadMore} />
  }
      </>
    );
  }
}
