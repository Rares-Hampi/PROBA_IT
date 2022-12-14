require("dotenv").config();
const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoute");
const memeRoutes = require("./routes/memeRoute");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

app.use(express.json());

app.use((req, res, next) => {
  next();
});

app.use("/user", userRoutes);
app.use("/memes", memeRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log("App listen on port", process.env.PORT);
});
