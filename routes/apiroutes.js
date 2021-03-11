const Workout = require("../models/workoutModel");
const router = require("express").Router();

router.put("/api/workouts/:id", (req, res) => {
  const data = req.body;
  Workout.create(data)
    .then((createdWorkout) => {
        console.log(createdWorkout)
        res.json(createdWorkout)})
    .catch((err) => res.json(err));
});

router.post("/api/workouts", (req, res) => {
  const data = req.body;
  console.log(data);
});

router.get("/api/workouts", (req, res) => {
    Workout.findOne({}).then(foundWorkouts => res.json(foundWorkouts))
    .catch(err => res.json(err))
})

module.exports = router;
