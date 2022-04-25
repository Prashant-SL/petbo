import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
	const [data, setData] = useState([]);
	// const getData = async (data) => {
	// 	// const res = await axios.get('http://localhost:5000/listing');
	// };
	return (
		<>
			<table>
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
					<tr>
						<td>1</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};
export default Home;
