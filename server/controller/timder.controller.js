const asyncHandler = require("express-async-handler");
const db = require("../models");

const ArbresTinder = db.arbres_tinder;

//GET ALL TREES

const getAll = asyncHandler(async (req, res) => {
  const trees = await ArbresTinder.findAll();

  res.json(trees);
});

//SWIPE RIGHT BY ID

const changeSwipe = asyncHandler(async (req, res) => {
  const id_arbre = req.params.id;
  const foundTree = await ArbresTinder.findOne({ where: { id_arbre } });
  foundTree.liked = 1;

  const updateTree = await foundTree.save();
  res.json(updateTree);
});

//GET ALL LIKED TREE

const likedTree = asyncHandler(async (req, res) => {
  const foundLikedTree = await ArbresTinder.findAll({ where: liked });
  res.json(foundLikedTree);
});

module.exports = {
  getAll,
  changeSwipe,
  likedTree,
};
