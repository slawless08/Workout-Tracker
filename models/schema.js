const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },

    exercise: [
        {
            type: {
                type: String,
                trim: true,
            },

            name: {
                type: String,
                trim: true,
            },
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number,
        },

    ]
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;