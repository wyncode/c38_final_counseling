import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import WelcomePage from './pages/WelcomePage';
import Home from './pages/Home';
//uncomment this once the private routes are back in use after the front end is finalized
// import PrivateRoute from './components/PrivateRoute';
import AboutPage from './pages/AboutPage';
import WelcomePage from './pages/WelcomePage';
import PasswordReset from './pages/PasswordReset';
import SignUpPage from './pages/SignUpPage';
import PasswordForgot from './pages/PasswordForgot';
import Login from './pages/Login';
import Profile from './pages/Profile';
import UnhealthyThinking from './pages/UnhealthyThinking/UnhealthyThinking';
import MentalHygiene from './pages/MentalHygiene';
import JournalPage from './pages/JournalPage';
import TherapistSearch from './pages/TherapistSearch';
import MyTherapist from './pages/MyTherapist';
import Toolbar from './components/Toolbar/Toolbar';
import TherapistProfile from './pages/TherapistProfile/TherapistProfile';
// import SideDrawer from './components/SideDrawer/SideDrawer';
// import Backdrop from './components/Backdrop/Backdrop';

function App() {


  return (
    <div style={{ height: '100%' }}>
      <BrowserRouter>
        <Toolbar />
        {/* <SideDrawer />
        <Backdrop /> */}
        <Switch>
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/welcome" component={WelcomePage} />
          <Route exact path="/password-reset" component={PasswordReset} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/password-forgot" component={PasswordForgot} />
          <Route exact path="/login" component={Login} />
          {/* Gotta make these routes private once the front end is finalized */}
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route
            exact
            path="/unheathly-thinking"
            component={UnhealthyThinking}
          />
          <Route exact path="/mental-hygiene" component={MentalHygiene} />
          <Route exact path="/journal-page" component={JournalPage} />
          <Route
            exact
            path="/therapist-search"
            component={TherapistSearch}
          />
          <Route exact path="/my-therapist" component={MyTherapist} />
          <Route exact path="/therapist:id" component={TherapistProfile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
