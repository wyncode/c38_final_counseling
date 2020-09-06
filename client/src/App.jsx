import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';
//uncomment this once the private routes are back in use after the front end is finalized
import PrivateRoute from './components/PrivateRoute';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import PasswordReset from './pages/PasswordReset/PasswordReset';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import PasswordUpdate from './pages/PasswordUpdate/PasswordUpdate';
import Login from './pages/Login/Login';
import UpdateAccount from './pages/UpdateAccount/UpdateAccount';
import UnhealthyThinking from './pages/UnhealthyThinking/UnhealthyThinking';
import MentalHygiene from './pages/MentalHygiene';
import JournalPage from './pages/JournalPage';
import TherapistSearch from './pages/TherapistSearch';
import MyTherapist from './pages/MyTherapist';
import Toolbar from './components/Toolbar/Toolbar';
import TherapistProfile from './pages/TherapistProfile/TherapistProfile';
import SideDrawer from './components/SideDrawer/SideDrawer';
import { AppContextProvider } from './context/AppContext';
import ReactCalendar from './components/Calendar';
import Backdrop from './components/Backdrop/Backdrop';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <AppContextProvider>
      <div style={{ height: '100%' }}>
        <BrowserRouter>
          <Toolbar setOpen={setOpen} open={open} />
          {open ? (
            <>
              <SideDrawer setOpen={setOpen} open={open} />
              <Backdrop setOpen={setOpen} open={open} />
            </>
          ) : null}

          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/calendar" component={ReactCalendar} />

            <Route exact path="/password-reset" component={PasswordReset} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/update-password" component={PasswordUpdate} />
            <Route exact path="/login" component={Login} />
            {/* Gotta make these routes private once the front end is finalized */}
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute exact path="/account" component={UpdateAccount} />
            <PrivateRoute
              exact
              path="/unhealthy-thinking"
              component={UnhealthyThinking}
            />
            <PrivateRoute
              exact
              path="/mental-hygiene"
              component={MentalHygiene}
            />
            <PrivateRoute exact path="/journal-page" component={JournalPage} />
            <PrivateRoute
              exact
              path="/therapist-search"
              component={TherapistSearch}
            />
            <PrivateRoute exact path="/my-therapist" component={MyTherapist} />
            <PrivateRoute
              exact
              path="/therapist/:id"
              component={TherapistProfile}
            />
          </Switch>
        </BrowserRouter>
      </div>
    </AppContextProvider>
  );
}

export default App;
