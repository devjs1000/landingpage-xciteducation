const asyncHandler = require("express-async-handler");
const Member = require("../models/memberModel");
// const nodemailer = require("nodemailer");

/*
LIST OF CONTROLLERS
1. Add Member
2. Update Member
3. Get All Members
4. Get Member by Id
5. Delete Member
*/
// ADD A MEMBER
const addMember = asyncHandler(async (req, res) => {
    const { name, quote, profilePicture } = req.body;

    const member = await Member.create({
        name, quote, profilePicture
    });
    // const userId = user._id;

    if (member) {
        res.status(200).json({ message: member })
    } else {
        res.status(404);
        throw new Error("Member not created");
    }

});

// GET ALL MEMBERS
const getAllMembers = asyncHandler(async (req, res) => {

    const members = await Member.find({})
    // const userId = user._id;

    if (members) {
        res.status(200).json({ message: members })
    } else {
        res.status(404);
        throw new Error("Members not found");
    }

});

// UPDATE A MEMBER
// User updates his/her own details - Protected Route


module.exports = { addMember, getAllMembers };
// module.exports = { addMember, updateMember, getAllMembers, getMemberById, deleteMember };