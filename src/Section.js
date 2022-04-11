import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';

const path = process.env.PUBLIC_URL;
const arr = [
	'Blizzards',
	'Calm',
	'Dusty_Road',
	'Escape',
	'Payday',
	'Retreat',
	'Seasonal',
	'Vespers',
];
const len = arr.length;

function Section() {
	let [num, setNum] = useState(0);
	const wrap = useRef(null);
	const rotate = () => {
		wrap.current.style.transform = `rotate(${45 * num}deg)`;
	};
	useEffect(() => {
		console.log('rotate');
		rotate(num);
	}, [num]);

	return (
		<>
			<section className='wrap' ref={wrap}>
				{arr.map((data, idx) => {
					return (
						<Card key={idx} path={path} data={data} index={idx} length={len} />
					);
				})}
			</section>

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

export default Section;
