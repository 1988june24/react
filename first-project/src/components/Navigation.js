import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {

	return(
         <div>
          <NavLink to="/">Нүүр</NavLink>
          <NavLink to="/About">About us</NavLink>
          <NavLink to="/Contact">Contact us</NavLink>
         </div>
		);
};

export default Navigation;