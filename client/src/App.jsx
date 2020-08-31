import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import WelcomePage from './pages/WelcomePage';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import PasswordReset from './pages/PasswordReset';
import SignUpPage from './pages/SignUpPage';
import PasswordForgot from './pages/PasswordForgot';
import Login from './pages/Login';
import Profile from './pages/Profile';
import UnhealthyThinking from './pages/UnhealthyThinking';
import MentalHygiene from './pages/MentalHygiene';
import JournalPage from './pages/JournalPage';
import TherapistSearch from './pages/TherapistSearch';
import MyTherapist from './pages/MyTherapist';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/password-reset" component={PasswordReset} />
          <Route exact path="/password-forgot" component={PasswordForgot} />
          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute
            exact
            path="/unheathly-thinking"
            component={UnhealthyThinking}
          />
          <Route exact path="/mental-hygiene" component={MentalHygiene} />
          <PrivateRoute exact path="/journal-page" component={JournalPage} />
          <PrivateRoute
            exact
            path="/therapist-search"
            component={TherapistSearch}
          />
          <PrivateRoute exact path="/my-therapist" component={MyTherapist} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
