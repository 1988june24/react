import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {

	return(
         <div class="nav">
	          <NavLink class="navlink" to="/">Нүүр </NavLink>
	          <NavLink class="navlink" to="/news">Мэдээ, мэдээлэл</NavLink>
	          <NavLink class="navlink" to="/gallery">Зургийн цомог</NavLink>
	          <NavLink class="navlink" to="/video">Видео</NavLink>
	          <NavLink class="navlink" to="/zaavar">Заавар, зөвлөмж</NavLink>
         </div>
		);
};

export default Navigation;