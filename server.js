const express = require("express");
const connectDB = require("./config/connectionDB");
const dotenv = require("dotenv").config();
const app = express();
const errorHandler = require("./middleware/errorHandler");

port = process.env.PORT || 5000;
connectDB();

app.use(express.json());
app.use("/api/younguser", require("./routes/youngUser"));
app.use("/api/help", require("./routes/helpRouter"));
app.use("/api/activity", require("./routes/activityRouter"));
app.use("/api/auth", require("./routes/authRouter"));
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
