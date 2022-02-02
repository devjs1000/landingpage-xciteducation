const express = require("express");

const {
    addMember, getAllMembers
} = require("../controllers/memberControllers");

const { protect } = require("../middlewares/protectedRoutes");

const router = express.Router();

// Register new user
router.route("/addMember").post(protect, addMember);

// Post user auth
// router.route("/updateMember").put(protect, updateMember);

// User gets his/her own details - Only logged in user
router.route("/getAllMembers").get(getAllMembers);

// router.route("/getMemberById").get(protect, getMemberById)

// User updates his/her own details - Only logged in user
// router.route("/deleteMember").delete(protect, deleteMember);

module.exports = router;