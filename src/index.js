import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/app/index';

import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';





// import './styles/global.sass';



// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
