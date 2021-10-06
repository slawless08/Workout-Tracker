const router = require('express').Router();
const path = require('path');

const db = require('../../models/schema');

// Get workouts route
// /workouts
router.get('/workouts', (req, res) => {
    // add fields to get total duration and distance of workouts
    db.Workout.aggregate([
        {
            $addfields: {
                totalDuration: {
                    $sum: '$exercises.duration',
                },
                totalDistance: {
                    $sum: '$exercises.distance',
                }
            }
        },
    ])
        .then(getWorkout => {
            res.json(getWorkout);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

// Post workout, create new workout
// /workouts
router.post('/workouts', (req, res) => {
    db.create({})
        .then(newWorkout => {
            res.json(newWorkout);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

// Put workout, update
// /workouts/:id
router.put('/workouts/:id', (req, res) => {
    db.findByIdAndUpdate(
        { _id: req.params.id },
        { $push: { exercises: req.body } },
    )
        .then(updateWorkout => {
            res.json(updateWorkout);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

