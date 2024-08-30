const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const connectDb = require('./config'); // Update the path as per your folder structure

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDb();

app.use(bodyParser.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
