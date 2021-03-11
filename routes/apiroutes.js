const Workout = require("../models/workoutModel");
const router = require("express").Router();

router.put("/api/workouts", (req, res) => {
    const data = req.body;
    console.log(data);
});

router.post("/api/workouts", (req, res) => {

    const data = req.body;
    console.log(data);
});

module.exports = router;