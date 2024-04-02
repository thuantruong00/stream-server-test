var express = require('express');
var router = express.Router();
var cors = require('cors');
const jwt = require("jsonwebtoken");
// ========================



/* GET home page. */
router.post('/',
	cors({}),
	// (req, res, next) => {
	// 	Middleware
	// 	return next()
	// },
	async (req, res) => {

		try {

		} catch (error) {
			res.send({
				status: false,
				message: "verify failed"
			});
		}



	});

module.exports = router;
