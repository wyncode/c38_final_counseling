# Mind Passage
![Mind Passage Logo](https://res.cloudinary.com/garzon/image/upload/v1599578546/MindPassage/Mind_Passage_Logo-ReadMeFile-02_so2ckq.png "Mind Passage Logo")
Welcome to Mind Passage. Our goal is to provide users with a place to find theraphists, and mental health tips. While allowing our user's to release how they feel with our Journal.

## Screenshot
![Welcome Page](https://res.cloudinary.com/garzon/image/upload/v1599577448/MindPassage/1_o9ypkf.png "Screenshot of Welcome Page")
![Home Page](https://res.cloudinary.com/garzon/image/upload/v1599577448/MindPassage/2_ahxccg.png "Screenshot of Home Page")
![Find Therapist](https://res.cloudinary.com/garzon/image/upload/v1599577448/MindPassage/3_qhmk59.png "Screenshot of Find Therapist Page")
![Journal Calendar](https://res.cloudinary.com/garzon/image/upload/v1599578288/MindPassage/6_aydqrb.png "Screenshot of Journal Calendar")
![Journal Entry](https://res.cloudinary.com/garzon/image/upload/v1599578288/MindPassage/7_ucf841.png "Screenshot of Journal Entry Page")
![Mental Hygiene](https://res.cloudinary.com/garzon/image/upload/v1599577448/MindPassage/4_tc64jf.png "Screenshot of Mental Hygiene Page")
![Unhealthy Thinking](https://res.cloudinary.com/garzon/image/upload/v1599577449/MindPassage/5_jhx9ie.png "Screenshot of Unhealthy Thinking Page")

## Specific features include:
- User's can keep track of their emotional state by acessing the calendar page which allows the users to submit journal entrys.
- The user can use our Seach feature to find a cheap and local Therapsit by a number of different factors such as Speciality, Treament type and more.
- health tips

## Further Goals:
- A more fleshed out user profile
- Allowing the user to keep track of their favortie Therapist
- Creating a dissucsion board to allow our users to chat with one another and help each other.
- adding more health tips and reminders

## APIs & Frameworks
We integrated several APIs and frameworks into our site:


- React-calendar as our calendar framework.
- Sendgrid for our email functionality.
- Bootstrap for the front end components and design.
- To track login information, we used JWT-based token authentication, bcrypt for password hashing, and Passport for user authentication.

## MERN Stack:
- MongoDB to store data  
- Express for our server
- React for our front end
- Node.js as our runtime.

---

## Dependencies

| Dependency      | Command                    |
| --------------- | -------------------------- |
| Axios           | `yarn add axios`           |
| React-Bootstrap | `yarn add react-bootstrap` |
| Bcrypt          | `yarn add bcrypt`          |
| Send Grid       | `yarn add @sendgrid/mail`  |
| SweetAlert      | `yarn add sweetalert`      |
| React Scroll    | `yarn add react-scroll`    |
| Moment          | `yarn add moment`          |
| Cookie-parser   | `yarn add cookie-parser`   |
| Express         | `yarn add express`         |
| Faker           | `yarn add faker`           |
| Passport        | `yarn add passport`        |
| JSON Web Token  | `yarn add passport-jwt`    |
| Mongoose        | `yarn add mongoose`        |
| MongoDB         | `yarn add mongodb`         |
| React Calender  | `yarn add react-calendar`  |
| Validator       | `yarn add validator`       |

## Setup

- `git clone` this repo
- `cd` into it.
- `yarn install`
- `cd client && yarn install`
- `cp .env.sample .env`

## Available build commands

- `yarn dev`: Runs BOTH your Express.JS and React developer environment locally at the same time. Any logs coming from Express will be prefaced with `[0]`, any logs from `create-react-app` will be prefaced with `[1]`.
- `yarn server`: Runs JUST your Express.JS server.
- `yarn client`: Runs JUST your front-end React app.

Open [http://localhost:3000](http://localhost:3000) to view your local React app in the browser. The page will reload if you make edits.

## To deploy

NOTE: Heroku specifically runs `npm start`, so don't remove that from your package.json file.

- `heroku create your-app-name`
- `heroku config:set MONGODB_URL=<insertYourAtlasDbUri>`
- `git push heroku master`

---

## Meet The Team:

- Diana Canelon  is a Full Stack Web Developer with 5+ years of experience in e-commerce and graphic design. Her past experiences plus her new skillset make her a valuable asset to any team. check  her out at 
[GitHub Profile](http://github.com/dianaccanelon)

- Jorge Silva  A USN Veteran with a mechanical background, Jorge's prior experience allows him to adapt quickly to any team dynamic, as well coming up with some creative solutions.check him out at 
[GitHub Profile](http://github.com/Jorge1772)

- Natalia  is a multi-faceted professional with extensive experience in media and creative direction. This experience has benefited her to thrive in her new skillset as a web developer making her an asset to any team. check her out at 
[GitHub Profile](http://github.com/talialina)

- Angelica Garzon joined Wyncode to learn how to use coding as a tool for creation. With 3+ years of design experience, she is ready to compliment your team as a front end developer.
[GitHub Profile](http://github.com/amgarz0n)

---
