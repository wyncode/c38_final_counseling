const router = require('express').Router(),
  mongoose = require('mongoose'),
  Therapist = require('../../db/models/Therapist');
// gets the therapist from our search bar needs to be tested after we populate our data base with faker

//create a therapist
router.post('/api/therapist/:id', async (req, res) => {
  const {
    name,
    jobTitle,
    gender,
    phoneNumber,
    prefix,
    companyName,
    streetAddress,
    zipCode,
    city,
    race,
    specialty,
    treatmentOrientation,
    laguage,
    cost
  } = req.body;
  try {
    const therapist = new Therapist({
      name,
      jobTitle,
      gender,
      phoneNumber,
      prefix,
      companyName,
      streetAddress,
      zipCode,
      city,
      race,
      specialty,
      treatmentOrientation,
      laguage,
      cost
    });
    await therapist.save();
    res.status(201).json(therapist);
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

//therapist search

router.get('/api/Therapist', async (req, res) => {
  try {
    const therapist = req.therapist;
    res.json(therapist);
  } catch (error) {
    console.log('No availble Therapist, please try a different search.');
  }
});
