const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/config");
// const generatePDF = require("./generatePdf");

// Routes
const userRoutes = require("./routes/userRoutes");
const memberRoutes = require("./routes/memberRoutes");
// const internshipRoutes = require("./routes/internshipRoutes");
// const orderRoutes = require("./routes/orderRoutes");
// const discussRoutes = require("./routes/discussRoutes");
// const testimonialRoutes = require("./routes/testimonialRoutes");
// const assignmentRoutes = require("./routes/assignmentRoutes");
// const adminRoutes = require("./routes/adminRoutes");
// const instructorRoutes = require("./routes/instructorRoutes");
// const contactFormRoute = require("./routes/contactFormRoutes");
// const careerFormRoute = require("./routes/careerFormRoutes");

dotenv.config();

// Connecting to mongodb server
connectDB();

// express application
const app = express();

// allow CORS
app.use(cors());

// Body Parser middleware, no need to install body-parser package
app.use(express.json());

const PORT = process.env.PORT || 8000


app.use("/user", userRoutes);
app.use("/member", memberRoutes);
// app.use("/order", orderRoutes);
// app.use("/discuss", discussRoutes);
// app.use("/testimonial", testimonialRoutes);
// app.use("/assignment", assignmentRoutes);
// app.use("/admin", adminRoutes);
// app.use("/instructor", instructorRoutes);
// app.use("/contact", contactFormRoute);
// app.use("/career", careerFormRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});