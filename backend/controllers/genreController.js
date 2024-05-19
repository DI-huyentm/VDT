const {
    Genre,
    Book,
    BookGenre,
    Sale,
    SaleDetail,
    User,
    sequelize,
    QueryTypes,
    Op,
} = require("../models/index");

exports.getAllGenres = async (req, res) => {
    try {
        const genres = await Genre.findAll();
        // console.log(books);
        return res.status(200).json({
          status: "success",
          results: genres.length,
          data: {
            genres,
          },
        });
    } catch (error) {
      return res.status(400).json({
        status: "fail",
        message: "Get all genres fail...",
      });
    }
  };