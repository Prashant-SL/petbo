import React from 'react';
import { Route, Routes } from 'react-router';
import Create from './Create';
import Home from './Home';
import Listing from './Listing';
import Navbar from './Navbar';

const Routers = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path={'/'} element={<Home />} />
				<Route path={'/listing'} element={<Listing />} />
				<Route path={'/listing/create'} element={<Create />} />
			</Routes>
		</>
	);
};
export default Routers;
