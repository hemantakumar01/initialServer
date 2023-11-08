import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).send({
      success: true,
      message: "You have successfully get",
    });
  } catch (error) {
    console.log(error);
  }
});

mongoose
  .connect(`${process.env.DBURL}`)
  .then(() => {
    try {
      const port = 8080;
      app.listen(port, () => {
        console.log(`Example app listening on port http://localhost:${port}`);
      });
    } catch (error) {
      console.log(error);
      console.log("Error in connecting Data Base");
    }
  })
  .catch(() => {
    console.log("Invalid database connection");
  });
