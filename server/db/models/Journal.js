const mongoose = require('mongoose'),
  moment = require('moment');
const journalSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    mood: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    date: {
      type: Date,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);
journalSchema.methods.toJSON = function () {
  const journal = this;
  const journalObject = journal.toObject();
  if (journalObject.date) {
    journalObject.date = moment(journalObject.date).format('YYYY-MM-DD');
  }
  return journalObject;
};
const Journal = mongoose.model('Journal', journalSchema);
module.exports = Journal;
