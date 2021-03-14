const db = require("../models");
const router = require("express").Router();

router.put("/api/workouts/:id", (req, res) => {
  const data = req.body;
  db.Workout.findByIdAndUpdate(req.params.id, {$push: {exercise: data}}, {new: true})
    .then((createdWorkout) => {
      console.log(createdWorkout);
      res.json(createdWorkout);
    })
    .catch((err) => res.json(err));
});

router.post("/api/workouts", (req, res) => {
  db.Workout.create({})
    .then((workoutsDB) => {console.log(workoutsDB); res.json(workoutsDB)})
    .catch((err) => res.json(err));
});

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((foundWorkouts) => res.json(foundWorkouts))
    .catch((err) => res.json(err));
});

module.exports = router;
