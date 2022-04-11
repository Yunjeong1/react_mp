import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import Btns from './Btns';

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
	const wrap = useRef(null);

	return (
		<>
			<section className='wrap' ref={wrap}>
				{arr.map((data, idx) => {
					return (
						<Card key={idx} path={path} data={data} index={idx} length={len} />
					);
				})}
			</section>
			<Btns wrap={wrap} />
		</>
	);
}

export default Section;
