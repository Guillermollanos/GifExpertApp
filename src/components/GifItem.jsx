import React from 'react';

export const GifItem = ({ title, url }) => {
	return (
		<div className='max-w-xs rounded overflow-hidden shadow-lg'>
			<img src={url} alt={title} className='w-full' />
			<div className='px-6 py-4'>
				<p className='font-bold text-xl mb-2'>{title}</p>
			</div>
		</div>
	);
};
