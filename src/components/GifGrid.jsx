import { GifItem } from '../components/GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
	const { images, isLoading } = useFetchGifs(category);

	return (
		<div className='my-4'>
			<h3 className='text-2xl mb-4 font-semibold'>{category}</h3>
			{isLoading && <h2 className='text-xl'>Cargando...</h2>}

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
				{images.map((image) => (
					<GifItem key={image.id} {...image} />
				))}
			</div>
		</div>
	);
};
