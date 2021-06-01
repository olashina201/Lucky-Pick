import mongoose from "mongoose";

const luckySchema = mongoose.Schema({
    luckyId: Number,
    lucky: [Number],
    multiply: Number
});


const luckyModel = mongoose.model("luckyModel", luckySchema);

export default luckyModel;