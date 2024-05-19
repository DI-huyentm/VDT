const { User, sequelize, QueryTypes } = require("../models/index");

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ["password"] } });

    return res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    return res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

exports.updateUser = async (req, res, next) => {
  try { 
    // const currentUser = req.user;
    // console.log(currentUser); 
    const currentUser = req.user;
    if (!currentUser) {
      return res.status(404).json({
        status: "fail",
        message: "Please login to update user",
      });
    }
    console.log(currentUser);

    await currentUser.update({ ...req.body });
    return res.status(200).json({
      status: "success",
      data: {
        currentUser,
      },
    });
    
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      error: error,
    });
  }
};

