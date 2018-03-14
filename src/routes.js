import React from 'react';
import { Route} from 'react-router-dom';

import App from './components/app/index';
import Main from './components/main/index';
import Shows from './components/shows/index';
import Videos from './components/videos/index';
import About from './components/about/index';
import Events from './components/events/index';
// import ItemPage from './components/ItemPage/index';
// import MyItems from './components/MyItems/index';
// import ErrorPage from './components/ErrorPage/index';


export default (
  <Route path="/" component={Shows}>
    <Route path="videos" component={Videos} />
    <Route path="about" component={About} />
    <Route path="mixes" component={Shows} />
    <Route path="events" component={events} />
{/*    <Route path="myItems" component={MyItems} />
    <Route path="*" component={ErrorPage} />*/}
  </Route>
);


