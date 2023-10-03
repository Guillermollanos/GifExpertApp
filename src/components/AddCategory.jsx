import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState('');

	const onInputChange = ({ target }) => {
		setInputValue(target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (inputValue.trim().length <= 1) return;
		onNewCategory(inputValue.trim());
		setInputValue('');
	};

	return (
		<form onSubmit={onSubmit} className='mb-4'>
			<input
				type='text'
				placeholder='Buscar Gifs'
				value={inputValue}
				onChange={onInputChange}
				className='w-full py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
			/>
		</form>
	);
};
