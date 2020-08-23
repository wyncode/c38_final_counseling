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
  if (journalObject.dueDate) {
    journalObject.dueDate = moment(journalObject.dueDate).format('YYYY-MM-DD');
  }
  return journalObject;
};
const Journal = mongoose.model('Journal', journalSchema);
module.exports = Journal;
