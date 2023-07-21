import React, { Fragment } from 'react';
import SwapiService from '../../services/swapi-service';
import { Provider } from '../swapi-context';
import { BrowserRouter } from 'react-router-dom';

import './app.css';

import Header from '../header';
import { PlanetsPage, PeoplePage } from '../pages/index'


const swapi = new SwapiService()

const App = () => {
  return (
    <Fragment>
      <Provider value={swapi}>

        <BrowserRouter>
          <Header />
        </BrowserRouter>

        {/* <BrowserRouter>
          <PeoplePage />
          <PlanetsPage />
        </BrowserRouter> */}
      </Provider>
    </ Fragment>
  );
};

export default App;