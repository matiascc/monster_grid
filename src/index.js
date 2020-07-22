import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons'
import { monsters } from './monsters';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Card id={monsters[0].id} name={monsters[0].name} email={monsters[0].email}/>
      <Card id={monsters[1].id} name={monsters[1].name} email={monsters[1].email}/>
      <Card id={monsters[2].id} name={monsters[2].name} email={monsters[2].email}/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
