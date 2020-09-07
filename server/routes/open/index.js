const router = require('express').Router(),
  { sendWelcomeEmail, forgotPasswordEmail } = require('../../emails/index'),
  jwt = require('jsonwebtoken'),
  User = require('../../db/models/User');

// Create User
router.post('/api/users/', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({
      name,
      email,
      password
    });

    const token = await user.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    sendWelcomeEmail(user.email, user.name);
    res.status(201).json(user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

// User Login
router.post('/api/users/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    res.json(user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

// password reset request
router.get('/api/password', async (req, res) => {
  try {
    const { email } = req.query,
      user = await User.findOne({ email });
    if (!user) throw new Error("account doesn't exist");

    const token = jwt.sign(
      { _id: user._id.toString(), name: user.name },
      process.env.JWT_SECRET,
      {
        expiresIn: '10m'
      }
    );

    forgotPasswordEmail(email, token);
    res.json({ message: 'reset password email sent' });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

// redirect to password reset request

router.get('/api/password/:token', (req, res) => {
  const { token } = req.params;
  try {
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) throw new Error(err.message);
    });
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: 600000,
      sameSite: 'Strict'
    });
    res.redirect(process.env.URL + '/update-password');
  } catch (error) {
    res.status(401).json({ error: error.toString() });
  }
});

module.exports = router;
