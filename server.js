import express from "express";
import mongoose from "mongoose";
import DbSchema from "./dbEntries.js";
import Cors from "cors";

// app config

const app = express();
const port = process.env.PORT || 8081;
const connection__url =
  "mongodb+srv://admin:lZfBBFzJ0elSFl1l@cluster0.qci5d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// middlewares

app.use(express.json());
app.use(Cors());

// db config

mongoose.connect(connection__url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// api endpoints

app.get("/", (req, res) => res.status(200).send("hello"));

app.post("/books/entry", (req, res) => {
  const ReqBody = req.body;
  DbSchema.create(ReqBody, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
    console.log(err);
  });
});

app.get("/books/entry", (req, res) => {
  DbSchema.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
    console.log(err);
  });
});

// listner

app.listen(port, console.log(`listening on local host ${port}`));
