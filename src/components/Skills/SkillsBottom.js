import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import './Skills.css';

function SkillsBottom () {

	const props = useSpring({marginLeft: 0, from: { marginLeft: 2000}, config: config.molasses, delay: 1500 })

	return (
		<animated.div style={ props }>
			<div className="skillsBottom">
			</div>
		</animated.div>
	)

}

export default SkillsBottom;