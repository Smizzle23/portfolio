import React from 'react';
import './About.css';
import { useSpring, animated, config } from 'react-spring';

function About () {

	const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay:500, config: config.molasses })

	return (
		<animated.div style={ props }>
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
		</animated.div>
	)
}


export default About;