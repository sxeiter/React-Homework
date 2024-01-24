import styles from './Navigation.module.css';


function Navigation () {
	return(
		<ul className={styles['navigation-list']}>
			<li className={styles['navigation-item']}>Поиск фильмов</li>
			<li className={styles['navigation-item']}>Мои фильмы</li>
			<li className={styles['navigation-item']}>Войти</li>
			<img src='Login.svg'/>
		</ul>
	);
}

export default Navigation;