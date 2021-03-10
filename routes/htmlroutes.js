const fs = require("fs");
const path = require("path");
const router = require("express").Router()

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/assets/index.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/assets/stats.html"));
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/assets/exercise.html"));
});


module.exports = router;