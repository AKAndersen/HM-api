const router = require("express").Router();
const Article = require("../models/article")

//CREATE

router.post("/", async (req, res) => {
    const newArticle = new Article(req.body);
    try{
        const savedArticle = await newArticle.save();
        res.status(201).json(savedArticle);
    }catch(err) {
        res.status(500).json(err)
    }
});

//UPDATE

router.put("/:id", async (req,res) => {
    try{
        const updatedArticle = await Article.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedArticle);
    }catch(err) {
        res.status(500).json(err)
    }
});

//DELETE

router.delete("/:id", async (req,res) => {
    try{
        await Article.findByIdAndDelete(req.params.id);
        res.status(200).json("This article has been deleted");
    }catch(err){
        res.status(500).json(err);
    }
})

//GET A SINGLE ARTICLE

router.get("/:id", async (req, res) => {
    try{
        const article = await Article.findById(req.params.id);
        res.status(200).json(article);
    }catch(err){
        res.status(500).json(err)
    };
});

//GET ALL ARTICLES

router.get("/", async (req,res) => {
    try{
        let books;
        books = await Article.find();
        res.status(200).json(books);
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router