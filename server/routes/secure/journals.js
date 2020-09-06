const router = require('express').Router(),
  mongoose = require('mongoose'),
  Journal = require('../../db/models/Journal');

router.get('/api/journals', async (req, res) => {
  try {
    const { user } = req;

    const journals = await Journal.find({ owner: user._id }).populate('owner');

    res.send({ journals });
  } catch (err) {
    res.status(500).send({ error: err.toString() });
  }
});

// ***********************************************//
// Create a journal
// ***********************************************//
router.post('/api/journal', async (req, res) => {
  const { title, mood, body } = req.body;
  try {
    const journal = new Journal({
      title,
      mood,
      body,
      owner: req.user._id
    });
    await journal.save();

    res.status(201).json(journal);
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

// ***********************************************//
// Fetch a journal entry by id
// ***********************************************//
router.get('/api/journal/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(400).json({ error: 'not a valid journal id' });
    const journal = await Journal.findOne({ _id, owner: req.user._id });
    if (!journal) return res.sendStatus(404);
    res.json(journal);
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

// ***********************************************//
// Delete a journal entry
// ***********************************************//
router.delete('/api/journal/:id', async (req, res) => {
  try {
    const journal = await Journal.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!journal) throw new Error('journal not found');
    res.json(journal);
  } catch (error) {
    res.status(404).json({ error: error.toString() });
  }
});

// ***********************************************//
// Update a journal entry
// ***********************************************//
router.patch('/api/journal/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['description', 'completed', 'dueDate'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).send({ error: 'Invalid updates!' });
  try {
    const journal = await Journal.findOne({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!journal) return res.status(404).json({ error: 'journal not found' });
    updates.forEach((update) => (journal[update] = req.body[update]));
    await journal.save();
    res.json(journal);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

module.exports = router;
