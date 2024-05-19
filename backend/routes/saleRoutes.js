const express = require("express");
const authController = require("../controllers/authController");
const saleController = require("../controllers/saleController");

const router = express.Router();

// router.get(
//     "/",
//     authController.protect,
//     authController.restrictTo("admin"),
//     saleController.getAllSales
//     );

router.post(
    "/",
    authController.protect,
    authController.restrictTo("admin", "user"),
    saleController.createSale
    );

// router.delete(
//     "/:id",
//     authController.protect,
//     //authController.restrictTo("admin"),
//     saleController.deleteSale
//     );

// router.patch(
//     "/:id",
//     authController.protect,
//     //authController.restrictTo("admin"),
//     saleController.updateSale
//     );

// router.post(
//     "/detail",
//     authController.protect,
//     authController.restrictTo("admin", "user"),
//     saleController.createSaleDetail
//     );
        
// router.patch(
//     "/detail/:id",
//     authController.protect,
//     //authController.restrictTo("admin"),
//     saleController.updateSaleDetail
//     );


// router.delete(
//     "/detail/:id",
//     authController.protect,
//     //authController.restrictTo("admin"),
//     saleController.deleteSaleDetail
//     );

module.exports = router;