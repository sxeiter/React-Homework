import './App.css';
import Title from './components/Title/Title';
import Text from './components/Text/Text';
import Header from './components/Header/Header';
import Body from './layout/Body/Body';
import Navigation from './components/Navigation/Navigation';
import Navbar from './layout/Navbar/Navbar';
import Search from './layout/Search/Search';
import SearchForm from './components/Input/SearchForm';
import CinemaCard from './components/CinemaCard/CinemaCard';



function App() {
	return (
		<div className='app'>
			<Navbar>
				<Header />
				<Navigation />
			</Navbar>
			<Search>
				<Title />
				<Text />
				<SearchForm />
			</Search>
			<Body>
				<CinemaCard />
			</Body>
			

		</div>

	);
}

export default App;
