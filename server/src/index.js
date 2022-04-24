const express = require('express');
const mongoose = require('mongoose');
const listingController = require('./controllers/listing.controller');

const app = express();
app.use(express.json());

const connect = () => {
	return mongoose.connect(
		'mongodb+srv://prashant:prashant@cluster0.xjxbs.mongodb.net/petApp?retryWrites=true&w=majority'
	);
};

app.listen(5000, async () => {
	try {
		await connect();
		console.log('listenning on port 5000');
	} catch (e) {
		console.log(e.message);
	}
});

app.use('/listing', listingController);
