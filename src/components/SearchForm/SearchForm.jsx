import { useState } from 'react';
import Button from '../Button/Button';
import './SearchForm.css';



function SearchForm() {
	const [inputData, setInputData] = useState('');

	const inputChange = (e) => {
		setInputData(e.target.value);
	};

	const addItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
	};

	return(
		<form className='form-input' onSubmit={addItem}>
			<label className='input-container'>
				<img src='Search.svg' alt='Иконка поиска'/>
				<input type="text" className="input" placeholder="Введите название" value={inputData} onChange={inputChange}/>
			</label>
			
			<Button text='Искать'/>
		</form>
        
	);
}

export default SearchForm;