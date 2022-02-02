const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: true,
        },
        profilePicture: {
            type: String,
            // required: true,
            default:
                "https://res.cloudinary.com/dizvyn9b5/image/upload/v1632241265/sjddbfkcij5tz8vokcmo.jpg",
        },
    },

    {
        timestamps: true,
    }
);

userSchema.methods.matchPassword = async function (enterredPassword) {
    return await bcrypt.compare(enterredPassword, this.password);
};

// Middleware for hashing password
// pre => before saving the user in the database
userSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt(5);
    this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;