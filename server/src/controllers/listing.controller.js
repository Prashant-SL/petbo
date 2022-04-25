const express = require('express');
const Listing = require('../models/listing.model');
// const app = express();

const router = express.Router();
router.get('/', async (req, res) => {
	try {
		const users = await Listing.find().lean().exec();
		return res.send(users);
	} catch (e) {
		return res.send(e.message);
	}
});
router.get('/:id', async (req, res) => {
	try {
		const users = await Listing.findById();
		return res.send(users);
	} catch (e) {
		return res.send(e.message);
	}
});

router.post('/create', async (req, res) => {
	// const { id, name, city, address, capacity, cost, verified, rating } =
	// 	req.body;
	try {
		const users = await Listing.create(req.body);
		return res.send(users);
	} catch (e) {
		console.log(e.message);
	}
});

module.exports = router;
