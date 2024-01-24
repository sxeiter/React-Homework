import { useState } from 'react';
import Button from '../Button/Button';
import styles from './SearchForm.module.css';



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
		<form className={styles['form-input']} onSubmit={addItem}>
			<label className={styles['input-container']}>
				<img src='Search.svg' alt='Иконка поиска'/>
				<input type="text" className={styles.input} placeholder="Введите название" value={inputData} onChange={inputChange}/>
			</label>
			
			<Button text='Искать'/>
		</form>
        
	);
}

export default SearchForm;