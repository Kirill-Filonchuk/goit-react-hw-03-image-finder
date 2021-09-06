import { Component } from "react";
import s from './Button.module.css';

export default class Button extends Component {
  state = {
  page:1
}


  // LoadBtn = event => {
  //   // console.log(event.currentTarget.name);
  //   this.props.LoadMore(this.state.page)
  //   this.setState(() => ({
  //     page: this.state + 1,
  //   }));
  // }
  


  render() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
    return (
    
      <button type="button" name="page" onClick={this.props.LoadMore} className={s.Button}><span className={s.styleBtn}>Load more</span> </button>
      
    )
    
  }
}