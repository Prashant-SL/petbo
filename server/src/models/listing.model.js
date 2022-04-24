const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
	id: { type: Number, required: true, unique: true },
	name: { type: String, required: true },
	city: { type: String, required: true },
	address: { type: String, required: true },
	capacity: { type: Number, required: false },
	cost: { type: Number, required: false },
	verified: { type: Boolean, required: false },
	rating: { type: Number, required: false },
});

module.exports = mongoose.model('listing', listingSchema);

//  = User;
