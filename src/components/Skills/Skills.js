import React from 'react';
import { useSpring, animated, config } from 'react-spring';

function Skills () {

	const props = useSpring({opacity: 1, from: { opacity: 0}, config: config.molasses })

	const skillsItems = [
		{
			title: 'Competences personelles',
			content1: 'Lorem ipsum dolor sit amet',
			content2: 'Lorem ipsum dolor sit amet'
		},
		{
			title: 'Front-End',
			content1: 'React',
			content2: 'Redux'
		},
		{
			title: 'Back-End',
			content1: 'Node.js',
			content2: 'Express.js'
		},
	]

	return skillsItems.map(item => 
		<animated.div style={ props }>
			<div className="skillsContent">
				<h2>{ item.title }</h2>
				<div>{ item.content1 }</div>
				<div>{ item.content2 }</div>
			</div>
		</animated.div>
	)

}

export default Skills;