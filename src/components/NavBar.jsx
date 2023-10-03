import React from 'react';

const Navbar = () => {
	return (
		<nav className='bg-gray-800 text-white p-4 text-center mb-6'>
			<div className='container mx-auto flex items-center justify-between'>
				<span className='text-2xl font-bold'>GifExpertApp</span>
				<div>
					<p>Proyecto realizado por Guillermo Llanos</p>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
