import './Navigation.css';


function Navigation () {
	return(
        
		<ul className='navigation-list'>
			<li className='navigation-item'>Поиск фильмов</li>
			<li className='navigation-item'>Мои фильмы</li>
			<li className='navigation-item'>Войти</li>
			<img src='Login.svg'/>
		</ul>
	);
}

export default Navigation;