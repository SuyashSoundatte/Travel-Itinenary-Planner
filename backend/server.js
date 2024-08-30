const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./src/routes/auth.routes");
const connectDb = require("./config"); // Update the path as per your folder structure
const itineraryRoutes = require("./src/routes/itinerary.routes");
const expenseRoutes = require("./src/routes/expense.routes");
const collaborationRoutes = require("./src/routes/collaboration.routes");
const profileRoute = require("./src/routes/profile.routes");

const app = express();
const PORT = process.env.PORT || 5000;
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Connect to the database
connectDb();

app.use("/api/auth", authRoutes);
app.use("/api/itinerary", itineraryRoutes);
app.use("/api/itinerary", expenseRoutes);
app.use("/api/itinerary", collaborationRoutes);
app.use("/api/profile", profileRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
