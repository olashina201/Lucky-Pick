import mongoose from "mongoose";

const luckySchema = mongoose.Schema({
    id: Number,
    date: { type: Date, default: Date.now },
    lucky: [Number],
    multiply: Number,
    image: String,
});


const luckyModel = mongoose.model("luckyModel", luckySchema);

export default luckyModel;