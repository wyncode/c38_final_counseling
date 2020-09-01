if (process.env.NODE_ENV !== 'production') require('dotenv').config();

require('../config');

const Journal = require('../models/Journal'),
  User = require('../models/User'),
  Therapist = require('../models/Therapist'),
  faker = require('faker'),
  mongoose = require('mongoose');

const dbReset = async () => {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany();
  }

  await User.countDocuments({}, function (err, count) {
    console.log('Number of users:', count);
    console.log(err);
  });
  await Journal.countDocuments({}, function (err, count) {
    console.log('Number of journals:', count);
    console.log(err);
  });
  const userIdArray = [];
  await Therapist.countDocuments({}, function (err, count) {
    console.log('Number of therapists:', count);
    console.log(err);
  });

  for (let i = 0; i < 100; i++) {
    const me = new User({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      email: faker.internet.email(),
      password: faker.internet.password()
    });
    await me.generateAuthToken();
    userIdArray.push(me._id);
  }

  for (let i = 0; i < 100; i++) {
    const journal = new Journal({
      title: faker.lorem.words(),
      mood: faker.lorem.word(),
      body: faker.lorem.paragraph(),
      owner: userIdArray[Math.floor(Math.random() * userIdArray.length)],
      date: faker.date.future()
    });
    await journal.save();
  }

  for (let i = 0; i < 50; i++) {
    const therapist = new Therapist({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      jobTitle: faker.name.jobTitle(),
      gender: faker.name.gender(),
      phoneNumber: faker.phone.phoneNumber(),
      prefix: faker.name.prefix(),
      companyName: faker.company.companyName(),
      streetAddress: faker.address.streetAddress(),
      zipCode: faker.address.zipCode(),
      city: faker.address.city()
    });
    await therapist.save();
  }
  await User.countDocuments({}, function (err, count) {
    console.log('Number of users:', count);
  });
  await Journal.countDocuments({}, function (err, count) {
    console.log('Number of journals:', count);
  });
  await Therapist.countDocuments({}, function (err, count) {
    console.log('Number of therapists:', count);
  });
};

dbReset();
