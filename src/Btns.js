import React, { useState, useEffect } from 'react';

function Btns(props) {
	let [num, setNum] = useState(0);
	const rotate = () => {
		props.wrap.current.style.transform = `rotate(${45 * num}deg)`;
	};
	useEffect(() => {
		console.log('rotate');
		rotate(num);
	}, [num]);

	return (
		<>
			<a
				href='#'
				className='prev'
				onClick={() => {
					setNum(++num);
				}}></a>
			<a
				href='#'
				className='next'
				onClick={() => {
					setNum(--num);
				}}></a>
		</>
	);
}

export default Btns;
