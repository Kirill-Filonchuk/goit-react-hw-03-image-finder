// import { Component } from "react";
import s from './Button.module.css';

export default function Button({ LoadMore, scroll }) {
   scroll()
  return (
    <button type="button" name="page" onClick={LoadMore} className={s.Button}>
      <span className={s.styleBtn}>Load more</span>{' '}
    </button>
  );
}

// export default class Button extends Component {

//   render() {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: 'smooth',
//     });
//     return (

//       <button type="button" name="page" onClick={this.props.LoadMore} className={s.Button}><span className={s.styleBtn}>Load more</span> </button>

//     )

//   }
// }
