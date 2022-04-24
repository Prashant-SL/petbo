import React from 'react';
import Home from './Home';
import { Link } from 'react-router-dom';
import Create from './Create';
import Listing from './Listing';

const Navbar = () => {
	return (
		<>
			<div style={{ display: 'flex', gap: '30px', textAlign: 'center' }}>
				<Link to={'/'} element={<Home />}>
					Home
				</Link>
				<Link to={'/listing'} element={<Listing />}>
					Listings
				</Link>
				<Link to={'/listing/create'} element={<Create />}>
					Add New Pet Board
				</Link>
			</div>
		</>
	);
};
export default Navbar;
