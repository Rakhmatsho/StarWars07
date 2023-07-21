import React, { Fragment } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages/index';
import RandomPlanet from '../random-planet';

import './header.css';

const Header = () => {
  return (

    <Fragment>

      <div className="header d-flex">
        <h3>
          <Link to="/">
            Star Wars
          </Link>
        </h3>
        <ul className="d-flex">
          <CustomLink to="/people">People</CustomLink>
          <CustomLink to="/planets">Planets</CustomLink>
          <CustomLink to="/starships">Starships</CustomLink>
        </ul>
      </div>

      <RandomPlanet />

      <Routes>
        <Route path='/people' element={<PeoplePage />} />
        <Route path='/planets' element={<PlanetsPage />} />
        <Route path='/starships' element={<StarshipsPage />} />
      </Routes>

    </Fragment>

  );

  function CustomLink({ to, children, ...props }) {
    return (
      <li>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }
};

export default Header;