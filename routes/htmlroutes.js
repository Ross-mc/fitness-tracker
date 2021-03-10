const fs = require("fs");
const path = require("path");
const router = require("express").Router()

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/assets/index.html"));
})

module.exports = router;