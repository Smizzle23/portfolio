import React from 'react';
import './About.css';
import { useSpring, animated, config } from 'react-spring';

function AboutBottom () {

	const props = useSpring({ marginTop: 0, from: { marginTop: 4000 }, delay: 1000, config: config.molasses})

	return (
		<animated.div style={ props }>
			<div className="bottomSection">
				<div className="bottomContainer">
					<div className="bottomInfo">
						<div className="photo"></div>
					</div>
					<div className="bottomText">
						<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis augue sollicitudin, feugiat eros et, semper tortor. 
						Pellentesque aliquam lobortis egestas. Aliquam sit amet eleifend diam. Cras ultricies semper nibh, a finibus risus ornare quis. 
						Quisque venenatis varius nunc. 
						</p>
					</div>
				</div>
			</div>
		</animated.div>
	)
}

export default AboutBottom;