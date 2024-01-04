const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }

    res.status(200).json(categoryData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(categoryData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value and return the deleted category
  try {
    // Find the category before deletion
    const deletedCategory = await Category.findByPk(req.params.id);

    if (!deletedCategory) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }

    // Delete the category
    await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    // Return the deleted category in the response
    res.status(200).json(deletedCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

module.exports = router;
