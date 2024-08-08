const express = require("express");
const router = express.Router();

//Create instance of Categories
const Categories = require("../models/categories");

//Show List of Categories
router.get("/", async (req, res) => {});

//Create a new Category
router.post("/", async (req, res) => {
  const { title, imageArt, description } = req.body;
  const newCategory = new Categories({
    title: title,
    imageArt: imageArt,
    description: description,
  });
  try {
    await newCategory.save();
    res.status(200).json(newCategory);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//find categories

router.get("/", async (req, res) => {
  try {
    const cat = Categories.find({}, null, { sort: { _id: -1 } });
    res.status(200).json(cat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  const cat = Categories.find();
});

//update Categories

router.put("/:id", async (req, res) => {
  try {
    const cat = await Categories.findByIdAndUpdate(
      req.params.id,
      { $set: res.body },
      { new: true }
    );
    res.status(200).json(cat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//Find By Id

router.get("/:id", async (req, res) => {
  try {
    const cat = await Categories.findById(req.params.id);
    res.status(200).json(cat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//Delete A Category

router.delete("/:categoryId", async (req, res) => {
  const id = req.params.categoryId;
  try {
    await Categories.findByIdAndDelete(id);
    res.json({ message: "Category Deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
