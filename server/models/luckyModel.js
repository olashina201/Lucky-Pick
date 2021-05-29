import mongoose from "mongoose";

const luckySchema = mongoose.Schema({
    id: Number,
    date: { type: Date, default: Date.now },
    lucky: [Number],
    multiply: Number,
    image: String,
});


const model = mongoose.model("smartphones", luckySchema);

module.exports = model;