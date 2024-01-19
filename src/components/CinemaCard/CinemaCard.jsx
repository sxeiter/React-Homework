import './CinemaCard.css';

const data = [
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
		
		<div className='grid-container'>
			{data.map((item) => (
				<div className='card' key={item.id}>
					<div className='card-count'>
						<img src='star.svg' alt='star' />
						{item.count}
					</div>
					<img className='card-img' src={item.image} alt='movie' />
					<h2 className='card-title'>{item.title}</h2>
					<p className='card-text'>
						<img src='like.svg'/>
						{item.text}
					</p>
				</div>
			))}
		</div>
		
		
	);
}


export default CinemaCard;