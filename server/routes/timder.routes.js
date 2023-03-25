const express = require("express");
const router = express.Router();
const timderController = require("../controller/timder.controller");

router
  .route("/")
  .get(timderController.getAll)
  .put(timderController.changeSwipe)
  .get(timderController.likedTree);

module.exports = router;
