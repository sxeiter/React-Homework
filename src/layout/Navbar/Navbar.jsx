import './Navbar.css';

function Navbar({children}) {
	return(
		<div className='navbar'>
			{children}
		</div>
	);
}

export default Navbar;