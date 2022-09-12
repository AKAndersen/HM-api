const router = require("express").Router();
const Book = require("../models/book")

//CREATE

router.post("/", async (req, res) => {
    const newBook = new Book(req.body);
    try{
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    }catch(err) {
        res.status(500).json(err)
    }
});

//UPDATE

router.put("/:id", async (req,res) => {
    try{
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedBook);
    }catch(err) {
        res.status(500).json(err)
    }
});

//DELETE

router.delete("/:id", async (req,res) => {
    try{
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).json("This character has been deleted");
    }catch(err){
        res.status(500).json(err);
    }
})

//GET A SINGLE BOOK

router.get("/:id", async (req, res) => {
    try{
        const book = await Book.findById(req.params.id);
        res.status(200).json(book);
    }catch(err){
        res.status(500).json(err)
    };
});

//GET ALL BOOKS

router.get("/", async (req,res) => {
    const qType = req.query.series
    try{
        let books;
        if(qType){
            books = await Book.find({
                series:{
                    $in: [qType],
                },
            })
        }else{
            books = await Book.find();
        }
        res.status(200).json(books);
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router