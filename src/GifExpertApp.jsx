import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
import Footer from './components/Footer';
import Navbar from './components/NavBar';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Punch']);

	const onAddCategory = (newCategory) => {
		if (categories.includes(newCategory)) return;

		setCategories([newCategory, ...categories]);
	};

	return (
		<div className='container mx-auto p-4 text-center'>
			{' '}
			<Navbar />
			{/* Agregamos la clase 'text-center' para centrar el contenido */}
			{/* Aumentamos el tamaño del texto con 'text-5xl' */}
			<AddCategory onNewCategory={(event) => onAddCategory(event)} />
			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}
			<Footer />
		</div>
	);
};
