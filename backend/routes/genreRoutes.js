const express = require("express");
//const authController = require("../controllers/authController");
const genreController = require("../controllers/genreController");

const router = express.Router();

router.get("/", genreController.getAllGenres);

module.exports = router;