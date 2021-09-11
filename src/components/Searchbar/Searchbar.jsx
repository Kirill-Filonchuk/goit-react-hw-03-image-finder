import { Component } from 'react';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    pixabeyToSearch: '',
  };
  handlSearchChange = event => {
    console.log('handlSearchChange', event.currentTarget.value);
    this.setState({
      pixabeyToSearch: event.currentTarget.value.toLowerCase(),
    });
  };

  handleSabmit = event => {
    event.preventDefault();
    
    console.log('onSubmit', this.state.pixabeyToSearch);
      if (this.state.pixabeyToSearch.trim() === '') {
        toast.error('Введите Ваш запрос!', {
          position: toast.POSITION.TOP_LEFT,
        });
        return;
      }
    this.props.onSubmit(this.state.pixabeyToSearch);
    this.setState({ pixabeyToSearch: '' });
  };
  
  render() {
    return (
      <header className={s.Searchbar}>
        <form onSubmit={this.handleSabmit} className={s.SearchForm}>
          <button
            type="submit"
            className={s.SearchFormButton}
            onClick={console.log('BTN - search')}
          >
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.pixabeyToSearch}
            onChange={this.handlSearchChange}
          />
        </form>
      </header>
    );
  }
}
