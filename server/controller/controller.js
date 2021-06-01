import luckyModel from "../models/luckyModel.js";

export const getLucky = async (req, res) => {
    try {
        const luckyModels = await luckyModel.find();
        console.log(luckyModels);
        res.status(200).json(luckyModels)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createLucky = async (req, res) => {
    const lucky = req.body;
    const newLucky = new luckyModel(lucky);
    try {
        await newLucky.save();
        res.status(201).json(newLucky);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}