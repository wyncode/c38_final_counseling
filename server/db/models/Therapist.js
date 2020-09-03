const mongoose = require('mongoose');

const TherapistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  jobTitle: {
    type: String
  },
  gender: {
    type: String
  },
  specialty: {
    type: String
  },
  modality: {
    type: String
  },
  ageSpecialty: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  companyName: {
    type: String
  },
  streetAddress: {
    type: String
  },
  zipCode: {
    type: String
  },
  city: {
    type: String
  },
  race: {
    type: String
  },
  specialty: {
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
