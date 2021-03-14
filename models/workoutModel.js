const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "name required"
    },
    type: {
        type: String,
        trim: true,
        required: "type required"
    },
    duration: {
        type: Number,
        required: "duration required"
    },
    userCreated: {
        type: Date,
        default: Date.now
    },
    weight: {
        type: Number
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number
    },
    distance: {
        type: Number
    }
});

const WorkoutsSchema = new Schema({
    day: Date,
    exercises: [WorkoutSchema]
})

const Workout = mongoose.model("Workout", WorkoutsSchema);

module.exports = Workout;