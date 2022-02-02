const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: false,
            trim: true,
            minlength: 2,
        },
        quote: {
            type: String,
            required: true,
            unique: false,
            trim: true,
            minlength: 2,
        },
        profilePicture: {
            type: String,
            required: true,
            unique: false,
            trim: true,
            minlength: 5,
            default: "https://res.cloudinary.com/dizvyn9b5/image/upload/v1632241265/sjddbfkcij5tz8vokcmo.jpg"
        },
    },
    {
        timestamps: false,
    }
);

const Member = new mongoose.model("Member", memberSchema);

module.exports = Member;