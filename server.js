const express = require("express");
const mongoose = require("mongoose");
const fileRoute = require("./routes/filesRouter");
const userRoute = require("./routes/userRoute");

const app = express();
const port = 3000;

const dbConnection = () => {
  mongoose
    .connect(
      "mongodb+srv://loai:Justdoitnow0@cluster0.menhy5a.mongodb.net/artist_test?retryWrites=true&w=majority"
    )
    .then((conn) => {
      console.log(`database connected : ${conn.connection.host}`);
    });
};
app.use(express.json());

dbConnection();

app.use("/api/files", fileRoute);
app.use("/api/users", userRoute);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
