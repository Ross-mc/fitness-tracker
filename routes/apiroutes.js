const db = require("../models");
const router = require("express").Router();

router.put("/api/workouts/:id", (req, res) => {
  const data = req.body;
  db.Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: data}}, {new: true})
    .then((createdWorkout) => {
      console.log(createdWorkout);
      res.json(createdWorkout);
    })
    .catch((err) => res.json(err));
});

router.post("/api/workouts", (req, res) => {
  let data = {
    day: new Date(),
    exercises: []
  }
  db.Workout.create(data)
    .then((workoutsDB) => {console.log(workoutsDB); res.json(workoutsDB)})
    .catch((err) => res.json(err));
});

router.get("/api/workouts", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .then((foundWorkouts) => res.json(foundWorkouts))
    .catch((err) => res.json(err));
});

module.exports = router;
