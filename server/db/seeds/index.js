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

    console.log(err);
  });
  await Journal.countDocuments({}, function (err, count) {

    console.log(err);
  });
  const userIdArray = [];
  await Therapist.countDocuments({}, function (err, count) {

    console.log(err);
  });

  for (let i = 0; i < 400; i++) {
    const me = new User({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      email: faker.internet.email(),
      password: faker.internet.password(),
      avatar: faker.image.avatar()
    });
    await me.generateAuthToken();
    userIdArray.push(me._id);
  }

  const journalBodies = [
    'Today I was feeling ok. I feel like I need to work on my self esteem.',
    'Today I just wanted to sleep all day. I was very drowsy.',
    'I am feeling very sad today, I dont know why.',
    'I am so happy today, I got a raise! This is going to make things so much easier.',
    'I found myself reminiscing a lot about my past today. I was thinking a lot about my childhood. I wish my family and I were closer than we are now. We had so much fun then.',
    'Today I took Giorgi to the water park, we had so much fun! Later I took her to eat ice cream, they had a new flavor that was to die for! Giorgi was making funny faces all day.',
    'I am so excited! Tomorrow I am finally taking off to Greece! I cannot wait to visit Athens. I have all my bags packed and ready to go.',
    'Today was a wonky day. It was one of those days that are just weird, when things dont go to plan.'
  ];
  for (let i = 0; i < 300; i++) {
    const journal = new Journal({
      title: faker.lorem.words(),
      mood: faker.lorem.word(),
      body: journalBodies[Math.floor(Math.random() * journalBodies.length)],
      owner: userIdArray[Math.floor(Math.random() * userIdArray.length)],
      date: faker.date.future()
    });
    await journal.save();
  }
  const races = [
    'asian',
    'african-american',
    'hispanic',
    'middle-eastern',
    'multi-racial',
    'native-american',
    'native-hawaiian',
    'white',
    'other'
  ];
  const cities = [
    'New York, NY',
    'Los Angeles, CA',
    'Chicago, IL',
    'Houston, TX',
    'Phoenix, AZ',
    'Philadelphia, PA',
    'San Antonio, TX',
    'San Diego, CA',
    'Dallas, TX',
    'San Jose, CA',
    'Austin, TX',
    'Fort Worth, TX',
    'Jacksonville, FL',
    'Colombus, OH',
    'Charlotte, NC',
    'San Francisco, CA',
    'Indianapolis, IN',
    'Seattle, WA',
    'Denver, CO',
    'Washington, DC',
    'Boston, MA',
    'El Paso, TX',
    'Nashville, TN',
    'Detroit, MI',
    'Portland, OR',
    'Miami, FL',
    'Ft.Lauderdale, FL',
    'Orlando, FL',
    'Cincinnati, OH',
    'Pittsburgh, PA',
    'Buffalo, NY',
    'Richmond, VA',
    'Arlington, VA',
    'Alexandria, VA',
    'Atlanta, GA'
  ];
  const genders = ['male', 'female', 'nonbinary'];
  const jobtTitles = [
    'Licensed Master Social Worker - LCSW',
    'Associate Marriage and Family Therapist - AMFT',
    'Clinical Social Worker/Therapist - LMSW',
    'Marriage & Family Therapist',
    'Counselor - LMHP-R',
    'Licensed Mental Health Counselor - LMHC',
    'Psychologist - Ph.D.',
    'National Certified Counselor - ALC',
    'Psychotherapist'
  ];
  const specialties = [
    'Anger Management',
    'Antisocial Personality',
    'Behavioral Issues',
    'Border Personality Disorder',
    'Coping Mechanisms',
    'Depression',
    'Developmental Disorders',
    'Divorce',
    'Domestic Abuse',
    'Eating Disorders',
    'Emotional Disturbance',
    'Loss or Grief',
    'Narcissistic Personality',
    'Parenting',
    'Relationship Issues',
    'Self Esteem',
    'Self Harming',
    'Sex Therapy',
    'Sexual Abuse',
    'Suicidal Ideation',
    'Teen Violence',
    'Trauma and PTSD',
    'Bipolar Disorder',
    'Dissociative Disorders',
    'Mood Disorders',
    'Personality Disorders',
    'Psychosis',
    'Aggression and Violence',
    'Agoraphobia',
    'Marriage Counseling'
  ];
  const modalities = ['couples', 'family', 'group', 'individual', 'children'];
  const ageSpecialties = [
    'Adolescent/Teenagers (14-19)',
    'Adults',
    'Children (6-10)',
    'Elders 65+',
    'PreTeens/Tweens (11-13'
  ];

  // Get sub-array of first n elements after shuffled

  for (let i = 0; i < 300; i++) {
    const shuffled = specialties.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(1, Math.floor(Math.random() * 9));
    const therapist = new Therapist({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      jobTitle: jobtTitles[Math.floor(Math.random() * jobtTitles.length)],
      //specialty: specialties[Math.floor(Math.random() * specialties.length)],
      specialty: selected,
      gender: genders[Math.floor(Math.random() * genders.length)],
      modality: modalities[Math.floor(Math.random() * modalities.length)],
      ageSpecialty:
        ageSpecialties[Math.floor(Math.random() * ageSpecialties.length)],
      phoneNumber: faker.phone.phoneNumber(),
      streetAddress: faker.address.streetAddress(),
      zipCode: faker.address.zipCode(),
      city: cities[Math.floor(Math.random() * cities.length)],
      race: races[Math.floor(Math.random() * races.length)],
      avatar: faker.image.avatar()
    });
    await therapist.save();
  }
  await User.countDocuments({}, function (err, count) {
    // console.log('Number of users:', count);
  });
  await Journal.countDocuments({}, function (err, count) {
    // console.log('Number of journals:', count);
  });
  await Therapist.countDocuments({}, function (err, count) {
    // console.log('Number of therapists:', count);
  });
};

dbReset();
