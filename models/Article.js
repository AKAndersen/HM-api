const mongoose = require("mongoose");

const date = new Date();

const ArticleSchema = new mongoose.Schema(
    {
        title: {type: String, required: true, unique: true},
        desc: {type: String, required: true},
        img: {type: String, required: true},
        date: {type:Date, default: date.toDateString()},

    },
    {timestamps: true} 
)

module.exports = mongoose.model("Article", ArticleSchema)