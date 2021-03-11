const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true });

app.use(express.static("public"));
app.use(require("./routes/htmlroutes"));
app.use(require("./routes/apiroutes"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
