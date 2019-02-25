import React from 'react';
import './Nav.css';
import logo from '../../logo.svg';
import { NavLink } from 'react-router-dom';
 
class Nav extends React.Component {

	constructor() {
		super();
		this.state = {

		}
	}

	render() {

		const getStyle = {
			backgroundColor: '#FF7A00',
			transition: 'all 230ms',
			color: 'white',
			padding: '0.5em 1em'
		}

		return (
			<div className="nav">
				<div className="nav-container">
					<img src={ logo } className="App-logo" alt="logo" />
					<ul className="nav-bar-list">
						<li className=""><NavLink to="/" exact activeStyle={ getStyle }>About</NavLink></li>
						<li className=""><NavLink to="/skills" activeStyle={ getStyle }>Skills</NavLink></li>
						<li className=""><NavLink to="/work" activeStyle={ getStyle }>Work</NavLink></li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Nav;