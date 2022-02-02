const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../middlewares/generateToken");
// const nodemailer = require("nodemailer");

/*
LIST OF CONTROLLERS
1. Register User
2. Login User
3. Get user Details
4. Update User
*/

// Register New user
const registerUser = asyncHandler(async (req, res) => {
    const { email, name, password, isInstructor, isAdmin } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
        res.status(404);
        throw new Error("User already exists");
    } else {
        const user = await User.create({
            name,
            email,
            password,
            isInstructor,
            isAdmin,
        });
        // const userId = user._id;

        if (user) {
            res.status(200).json({ message: user })
            //       const output = `
            //       '<h2>Welcome to Full Stack Simplified 👻</h2>
            //     <p>You have registered successfully</p>
            //     <h3>Your Account Details:</h3>
            //     <ul>
            //       <li>Name : ${req.body.name}</li>
            //       <li>Email : ${req.body.email}</li>
            //       <li>Password : ${req.body.password}</li>
            //     </ul>
            //     <p>Please save your account details for future references</p>
            //     <p></p>
            //     <p>Regards</p>
            //     <p>Team Full Stack Simplified</p>
            //   `;
            // create reusable transporter object using the default SMTP transport
            //   let transporter = nodemailer.createTransport({
            //     // host: "smtp.ethereal.email",
            //     port: 587,
            //     secure: false, // true for 465, false for other ports
            //     auth: {
            //       user: `${process.env.FSS_EMAIL}`, // generated ethereal user
            //       pass: `${process.env.FSS_PASSWORD}`, // generated ethereal password
            //     },
            //     // If on localhost
            //     tls: {
            //       rejectUnauthorized: false,
            //     },
            //     service: "gmail",
            //   });

            // send mail with defined transport object
            //   let mailOptions = {
            //     // from: '"Nodemailer Testing" <raj.sanghavi1@svkmmumbai.onmicrosoft.com>', // sender address
            //     from: "Team Full Stack Simplified",
            //     to: `${user.email}`, // list of receivers
            //     subject: "Registration Successful ✔", // Subject line
            //     // text: "Hello world?", // plain text body
            //     // html: "<b>Hello world?</b>", // html body
            //     html: output,
            //     // attachments: [
            //     //   {
            //     //     path: "/home/ubuntu/MYFOLDER/Cloned/E-Commerce/frontend/public/images/alexa.jpg",
            //     //   },
            //     // ],
            //   };

            //   transporter.sendMail(mailOptions, (error, info) => {
            //     if (error) {
            //       res.json(error);
            //     } else {
            //       console.log("Message sent: %s", info.messageId);
            //       console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            //       res.status(200).json({
            //         success: true,
            //         emailSuccess: true,
            //         data: user,
            //       });
            //       // res.status(200).json({
            //       //   _id: user._id,
            //       //   name: user.name,
            //       //   email: user.email,
            //       //   isInstructor: user.isInstructor,
            //       //   isAdmin: user.isAdmin,
            //       //   token: generateToken(user._id),
            //       //   message: "User Register Successful",
            //       //   emailMessage: "Email Sent",
            //       // });
            //       // res.json(req.body);
            //       // res.json({ msg: "Email sent" });
            //     }
            //   });
        } else {
            res.status(404);
            throw new Error("User not created");
        }
    }
});

// Login existing users
const userLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        if (user.isAdmin === true) {
            res.status(200).json({
                success: true,
                data: user,
                token: generateToken(user._id),
            });
        } else {
            res.status(404).json({
                success: false,
                message: "You are not an admin.",
            });
            // res.status(404);
            // throw new Error("Please visit Admin/Instructor page.");
        }
    } else {
        res.status(404);
        throw new Error("Invalid email or password.");
    }
});

// User can see his/her details - Protected Route
const getUserDetails = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        res.status(200).json({
            success: true,
            data: user,
        });
    } else {
        res.status(404);
        throw new Error("User not Found");
    }
});

// User updates his/her own details - Protected Route
const updateUserDetails = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        if (req.body.name) {
            user.name = req.body.name;
        }
        if (req.body.email) {
            user.email = req.body.email;
        }
        if (req.body.password) {
            user.password = req.body.password;
        }
        const updatedUser = await user.save();
        res.status(200).json({
            success: true,
            data: updatedUser,
        });
    } else {
        res.status(404);
        throw new Error("User not Found");
    }
});

module.exports = { registerUser, userLogin, getUserDetails, updateUserDetails };