const mongoose = require('mongoose');

const TherapistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
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
    type: String,
    required: true
  },
  prefix: {
    type: String
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
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  race: {
    type: String
  },
  specialty: {
    type: String
  },
  treatmentOrientation: {
    type: String
  },
  language: {
    type: Array
  },
  cost: {
    type: Number
  }
});

const Therapist = mongoose.model('Therapist', TherapistSchema);
module.exports = Therapist;
