import styles from './CinemaCard.module.css';

const FILMS_LIST = [
	{
		id: 1,
		count: 324,
		image: './black-widow.jpg',
		title: 'Black Widow',
		text: 'В избранное'
	},
	{
		id: 2,
		count: 124,
		image: './shang-chi.jpg',
		title: 'Shang Chi',
		text: 'В избранное'
	},
	{
		id: 3,
		count: 235,
		image: './loki.jpg',
		title: 'Loki',
		text: 'В избранное'
	},
	{
		id: 4,
		count: 123,
		image: './how-i-met-your-mother.jpg',
		title: 'How I Met Your Mother',
		text: 'В избранное'
	},
	{
		id: 5,
		count: 8125,
		image: './money-heist.jpg',
		title: 'Money Heist',
		text: 'В избранное'
	},
	{
		id: 6,
		count: 123,
		image: './friends.jpg',
		title: 'Friends',
		text: 'В избранное'
	},
	{
		id: 7,
		count: 12,
		image: './the-big-bang-theory.jpg',
		title: 'The Big Bang Theory',
		text: 'В избранное'
	},
	{
		id: 8,
		count: 456,
		image: './two-and-a-half-men.jpg',
		title: 'Two And a Half Men',
		text: 'В избранное'
	}
];


function CinemaCard() {
	return (
		
		<div className={styles['grid-container']}>
			{FILMS_LIST.map((item) => (
				<div className={styles.card} key={item.id}>
					<div className={styles['card-count']}>
						<img src='star.svg' alt='иконка звездочки' />
						{item.count}
					</div>
					<img className={styles['card-img']} src={item.image} alt='постер фильма' />
					<h2 className={styles['card-title']}>{item.title}</h2>
					<p className={styles['card-text']}>
						<img src='like.svg' alt='Количество лайков'/>
						{item.text}
					</p>
				</div>
			))}
		</div>
		
		
	);
}


export default CinemaCard;