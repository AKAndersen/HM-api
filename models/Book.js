const mongoose = require("mongoose");


const BookSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, unique: true},
        description: {type: String, required: true},
        img: {type: String, required: true},
        storeImg: [{type: Array, required: false},],
        link: [{type: Array, required: false}],
        series: {type: String, enum: ["Spider-Man", "X-Men", "Hulk", "Þór", "Silver-Surfer"]}
    },
    {timestamps: true} 
)

module.exports = mongoose.model("Book", BookSchema)