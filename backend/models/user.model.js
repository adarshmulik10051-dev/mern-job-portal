import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    passWord: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['student', 'recruiter'],
        required: true
    },
    profile: {
        bio: { type: String },
        skills: { type: String },
        resume: { type: String },//URL to resume
        resumeOrignalName: { type: String },
        company: { type: mongoose.Schema.Types.ObjectId, ref: 'company' },
        profilePhoto: {
            type: String,
            default: ""
        }
    },

}, { timeStamps: true });
export const user = mongoose.model("user", userSchema);