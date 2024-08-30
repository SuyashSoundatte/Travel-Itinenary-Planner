const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./src/routes/auth.routes");
const connectDb = require('./config'); // Update the path as per your folder structure
const itineraryRoutes = require('./routes/itinerary');
const expenseRoutes = require('./routes/expense');
const collaborationRoutes = require('./routes/collaboration');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(cors());

// Connect to the database
connectDb();

app.use("/api/auth", authRoutes);
app.use('/api/itinerary', itineraryRoutes);
app.use('/api/itinerary', expenseRoutes);
app.use('/api/itinerary', collaborationRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
