import React, { useState } from 'react';

const Create = () => {
	const initValue = {
		id: '',
		name: '',
		city: '',
		address: '',
		capacity: '',
		cost: '',
		verified: '',
		rating: '',
	};

	const [formData, setFormdata] = useState(initValue);

	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log('value:', value);
		setFormdata({ ...formData, [name]: value });
	};

	return (
		<>
			<br />
			{/* onSubmit={handleSubmit} */}
			<form style={{ display: 'grid', justifyContent: 'center' }}>
				<h1>Create New Pet Board</h1>
				<input
					name="id"
					type="number"
					placeholder="Enter ID"
					onChange={handleChange}
				/>
				<input
					name="name"
					onChange={handleChange}
					type="string"
					placeholder="Enter Name"
				/>
				<input
					name="city"
					onChange={handleChange}
					type="string"
					placeholder="Enter City"
				/>
				<input
					name="address"
					onChange={handleChange}
					type="string"
					placeholder="Enter Address"
				/>
				<select onChange={handleChange} name="capacity">
					<option name="5">5-10</option>
					<option name="10">10-15</option>
				</select>
				<input
					name="cost"
					onChange={handleChange}
					type="number"
					placeholder="Enter Cost Per Day"
				/>
				<select onChange={handleChange}>
					<option name="">Verified?</option>
					<option name="yes">Yes</option>
					<option name="no">No</option>
				</select>
				<input
					onChange={handleChange}
					name="rating"
					type="number"
					placeholder="Enter Rating"
				/>
				<br />
				<input name="submit" type="submit" placeholder="Create" />
			</form>
		</>
	);
};
export default Create;
