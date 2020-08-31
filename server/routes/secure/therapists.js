const router = require('express').Router(),
  mongoose = require('mongoose'),
  Therapist = require('../../db/models/Therapist');
// gets the therapist from our search bar needs to be tested after we populate our data base with faker

router.get('/api/Therapist', async (req, res) => {
  try {
    const therapist = req.therapist;
    res.json(therapist);
  } catch (error) {
    console.log('No availble Therapist, please try a different search.');
  }
});
