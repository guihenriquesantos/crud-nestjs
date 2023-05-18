import mongoose from "mongoose";

export const TaskSchema = new mongoose.Schema({
    description: String,
    competed: Boolean
})