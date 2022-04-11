import React from 'react';

function Card(props) {
	return (
		<article>
			<div className='pic'>
				<img src={`${props.path}/img/${props.data}.jpg`} />
			</div>
		</article>
	);
}

export default Card;
