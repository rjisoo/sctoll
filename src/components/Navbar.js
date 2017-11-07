import React from 'react';
import data from '../data'
import './style.css';

export default (props) => {
return (
	<div >
		{
			data.map((content, i) => (
				<div className='index' id={`${i}`} key={i} onClick={props.handleNavClick}>
					{content.title}
				</div>
			))			
		}
	</div>
)}
