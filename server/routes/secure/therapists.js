const router = require('express').Router(),
  mongoose = require('mongoose'),
  Therapist = require('../../db/models/Therapist');
// gets the therapist from our search bar needs to be tested after we populate our data base with faker
//create a therapist
router.post('/api/therapists/:id', async (req, res) => {
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
router.post('/api/therapists', async (req, res) => {
  //sample postman request
  //http://localhost:8080/api/therapists?price=100&location=Miami&race=black
  const {
    name,
    jobTitle,
    gender,
    streetAddress,
    zipCode,
    city,
    race,
    specialty,
    treatmentOrientation,
    language,
    cost
  } = req.query;

  const updates = Object.keys(req.body);
  const searchObject = {};

  console.log(1, searchObject);

  updates.forEach((update) => {
    if (!req.body[update]) return null;
    searchObject[update] = req.body[update];
  });
  console.log(2, searchObject);
  try {
    //const therapist = req.therapist;
    const therapists = await Therapist.find(searchObject);
    res.json(therapists);
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

module.exports = router;
