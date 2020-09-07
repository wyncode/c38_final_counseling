# Mind Passage

Welcome to Mind Passage. Our goal is to provide users with a place to find theraphists, and mental health tips. While allowing our user's to release how they feel with our Journal.

#Specific features include:
-User's can keep track of their emotional state by acessing the calendar page which allows the users to submit journal entrys.
-The user can use our Seach feature to find a cheap and local Therapsit by a number of different factors such as Speciality, Treament type and more.
-health tips

#Further Goals:
-A more fleshed out user profile
-Allowing the user to keep track of their favortie Therapist
-Creating a dissucsion board to allow our users to chat with one another and help each other.
-adding more health tips and reminders

#MERN Stack
-MongoDB to store data  
-Express for our server
-React for our front end
-Node.js as our runtime.

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

#### #Meet The Team:

- Diana Canelon
- Jorge Silva
- Natalia Molina
- Angelica Garzon

---
