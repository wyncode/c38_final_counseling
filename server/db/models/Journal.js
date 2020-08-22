const mongoose = require('mongoose');
const Journal = new mongoose.Schema(
  {
    Journal: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    mood: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);
const Journal = mongoose.model('Journal', journalSchema);
module.exports = Journal;
