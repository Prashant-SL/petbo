const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
	id: { type: Number, required: true },
	first_name: { type: String, required: true, unique: true },
	last_name: { type: String, required: true },
	email: { type: String, required: true },
	gender: { type: String, required: true },
	ip_address: { type: Number, required: false },
});

module.exports = mongoose.model('listing', listingSchema);

//  = User;
