const express = require("express");
const router = express.Router();

//create instance of articles
const Articles = require("../models/articles");

//show list of articles
router.get("/", async (req, res) => {});

//Create a new article
router.post("/", async (req, res) => {
  const { title, imageArt, price, description, categoryID } = req.body;
  const newArticle = new Articles({
    title: title,
    imageArt: imageArt,
    price: price,
    description: description,
    categoryID: categoryID,
  });
  try {
    await newArticle.save();
    res.status(200).json(newArticle);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//delete an article
router.delete("/:id", async (req, res) => {
  try {
    await Category.findByIdAndDekete(req.params.id);
    res.status(200).json({ message: "The Article is deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//Find Articles
router.get("/", async (req, res) => {
  try {
    const art = await Articles.find({}, null, {
      sort: { _id: -1 },
    }).populate("categorieID");
    res.status(200).json(art);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  const art = Articles.find();
});

// Update Article
router.put("/:id", async (req, res) => {
  try {
    const art = await Articles.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(art);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
