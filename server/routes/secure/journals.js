const router = require('express').Router(),
    mongoose = require('mongoose'),
    Journal = require('../../db/models/Journal');

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
            owner: mongoose.Schema.Types.ObjectId,
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
        if (!task) return res.sendStatus(404);
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
            owner: req.user._id,
        });
        if (!journal) throw new Error('task not found');
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
        allowedUpdates.includes(update),
    );
    if (!isValidOperation)
        return res.status(400).send({ error: 'Invalid updates!' });
    try {
        const task = await Journal.findOne({
            _id: req.params.id,
            owner: req.user._id,
        });
        if (!journal) return res.status(404).json({ error: 'journal not found' });
        updates.forEach((update) => (task[update] = req.body[update]));
        await journal.save();
        res.json(task);
    } catch (e) {
        res.status(400).json({ error: e.toString() });
    }
});


// // ***********************************************//
// // Get all mood and date
// // /journal?limit=10&skip=10
// // /journal?sortBy=createdAt:asc
// // /journal?sortBy=dueDate:desc
// // ***********************************************//
// router.get('/api/journal', async (req, res) => {
//     try {
//       const match = {},
//         sort = {};
//       if (req.query.completed) {
//         match.completed = req.query.completed === 'true';
//       }
//       if (req.query.sortBy) {
//         const parts = req.query.sortBy.split(':');
//         sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
//       }
//       await req.user
//         .populate({
//           path: 'journal',
//           match,
//           options: {
//             limit: parseInt(req.query.limit),
//             skip: parseInt(req.query.skip),
//             sort,
//           },
//         })
//         .execPopulate();
//       res.json(req.user.journal);
//     } catch (error) {
//       res.status(400).json({ error: error.toString() });
//     }
//   });

module.exports = router;