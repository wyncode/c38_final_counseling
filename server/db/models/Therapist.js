const mongoose = require('mongoose');

const TherapistSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true
  },
  jobTitle: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },

  phoneNumber: {
    type: Number,
    required: true
  },
  prefix: {
    type: String,
    required: false
  },
  companyName: {
    type: String,
    required: true
  },
  streetAddress: {
    type: String,
    required: true
  },
  zipCode: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  race: {
    type: String,
    required: true
  },
  specialty: {
    type: String,
    required: true
  },
  treatmentOrientaion: {
    type: String,
    required: true
  },
  language: {
    type: Array,
    required: true
  },
  Cost: {
    type: Number,
    required: true
  }
});

const Therapist = mongoose.model('Therapist', TherapistSchema);
module.exports = Therapist;
