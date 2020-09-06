const router = require('express').Router(),
  bcrypt = require('bcryptjs'),
  { sendCancellationEmail } = require('../../emails/index'),
  User = require('../../db/models/User');

//Get Current User
router.get('/api/users/:id', async (req, res) => {
  try {
    const user = req.user;
    res.json(user);
  } catch (error) {
    console.log('No user, please login');
  }
});

// ***********************************************//
// Update a user
// ***********************************************//

router.patch('/api/users/me', async (req, res) => {
  try {
    let { password } = req.body;

    if (password) {
      password = await bcrypt.hash(password, 8);
    }

    const userUpdates = {
      ...req.body,
      ...(password && { password })
    };

    const user = await User.findByIdAndUpdate(req.user._id, userUpdates, {
      new: true,
      runValidators: true
    });

    res.status(200).json({ user });
  } catch (err) {
    console.log('Something went wrong. Could not update user', err);
    res.status(400).json({ error: true, message: err.message });
  }
});

// ***********************************************//
// Logout a user
// ***********************************************//
router.post('/api/users/logout', async (req, res) => {
  console.log(req.user);
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'logged out!' });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});
// ***********************************************//
// Logout all devices
// ***********************************************//
router.post('/api/users/logoutAll', async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'all devices logged out' });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});
// ***********************************************//
// Delete a user
// ***********************************************//
router.delete('/api/users/me', async (req, res) => {
  try {
    await req.user.remove();
    sendCancellationEmail(req.user.email, req.user.name);
    res.clearCookie('jwt');
    res.json({ message: 'user deleted' });
  } catch (error) {
    res.status(500).json({ error: e.toString() });
  }
});
//Upload Avatar to User
// TODO this is a placeholder route, it does not work yet
router.post('/api/users/avatar', async (req, res) => {
  const { image } = req.body;
  try {
    req.user.avatar = image;
    const updatedUser = await req.user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

// ******************************
// Update password
// ******************************
router.put('/api/password', async (req, res) => {
  try {
    req.user.password = req.body.password;
    await req.user.save();

    console.log('what is happening', req.user);

    res.clearCookie('jwt');
    res.json({ message: 'password updated successfully' });
  } catch (e) {
    res.json({ error: e.toString() });
  }
});

module.exports = router;
