const express = require('express');
const User = require('../models/user');
// const app = express();

const router = express.Router();
router.get('/', async (req, res) => {
	try {
		const users = await User.find().lean().exec();

		return res.send(users);
	} catch (e) {
		return res.send(e.message);
	}
});

router.post('/', async (req, res) => {
	try {
		const users = await User.create(req.body);
		return res.send(users);
	} catch (e) {
		console.log(e.message);
	}
});

module.exports = router;
