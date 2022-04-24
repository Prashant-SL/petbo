import React, { useState } from 'react';
import './App.css';
import Create from './Components/Create';
import Home from './Components/Home';
import Listing from './Components/Listing';
import Navbar from './Components/Navbar';
import Routers from './Components/Routers';
// function App() {
// 	const [count, setCount] = useState(0);

// 	return <>App</>;
// }

export default class App extends React.Component {
	render() {
		return (
			<>
				<Routers />
			</>
		);
	}
}

// export default App;
