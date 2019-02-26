import React from 'react';
import './Nav.css';
import logo from '../../logo.svg';
import { NavLink } from 'react-router-dom';
 
function Nav () {

	const getStyleAbout = {
		backgroundColor: '#FF7A00',
		color: 'white',
		padding: '0.5em 1em'
	}

	const getStyleSkills = {
		backgroundColor: '#970408',
		color: 'white',
		padding: '0.5em 1em'
	}
	
	const getStyleWork = {
		backgroundColor: '#00ba2e',
		color: 'white',
		padding: '0.5em 1em'
	}

	return (
		<div className="nav">
			<div className="nav-container">
				<img src={ logo } className="App-logo" alt="logo" />
				<ul className="nav-bar-list">
					<li className=""><NavLink to="/" exact activeStyle={ getStyleAbout }>About</NavLink></li>
					<li className=""><NavLink to="/skills" activeStyle={ getStyleSkills }>Skills</NavLink></li>
					<li className=""><NavLink to="/work" activeStyle={ getStyleWork }>Work</NavLink></li>
				</ul>
			</div>
		</div>
	)
}

export default Nav;