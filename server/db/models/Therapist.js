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
    type: Array
  },
  avatar: {
    type: String
  }
});

const Therapist = mongoose.model('Therapist', TherapistSchema);
module.exports = Therapist;
