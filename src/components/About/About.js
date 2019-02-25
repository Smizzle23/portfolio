import React from 'react';
import './About.css';

class About extends React.Component {

	render() {
		return (
				<div className="aboutContainer">
					<div className="textContainer">
						<p className="text" style={{paddingBottom: '1.5em'}}>
					    	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis augue sollicitudin, feugiat eros et, semper tortor. 
						</p>
						<p className="text">
					    	Pellentesque aliquam lobortis egestas. 
						</p>
					</div>
				</div>
		)
	}
}

export default About;