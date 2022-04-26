import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		getData();
	}, []);
	const getData = async (data) => {
		try {
			const res = await axios.get('http://localhost:5000/listing');
			setData([...res.data]);
			console.log([...res.data]);
		} catch (e) {
			console.log(e.message);
		}
	};
	return (
		<>
			<br />
			<br />
			<table border="1">
				<thead>
					<tr>
						<td>ID</td>
						<td>Name</td>
						<td>City</td>
						<td>Address</td>
						<td>Capacity</td>
						<td>Cost Per Person</td>
						<td>Verified?</td>
						<td>Rating</td>
					</tr>
				</thead>
				<tbody>
					{data.map((el) => {
						return (
							<tr key={el.id}>
								<td>
									<Link to={`/listing/${el.id}`}>{el.id}</Link>
								</td>
								<td>{el.name}</td>
								<td>{el.city}</td>
								<td>{el.address}</td>
								<td>{el.capacity}</td>
								<td>{el.cost}</td>
								<td>{el.verified}</td>
								<td>{el.rating}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};
export default Home;
