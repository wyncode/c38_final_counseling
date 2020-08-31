import React from 'react';

function WelcomePage() {
  return (
    <div>
      <div>
        <div className="welcomePage">
          <section className="section">
            <div className="hero">
              <h1 className="MPTitle">Mind Passage</h1>
              <p className="description">
                <h2>Find a Therapist</h2>
                <br>
                  <h4>
                    Our therapists provide affordable, in-office and online
                    psychotherapy sessions
                  </h4>
                  <br>
                    <br>
                      <h1>
                        <b>HOW DOES IT WORK</b>
                      </h1>
                    </br>
                  </br>
                </br>{' '}
                <ScrollLink
                  to="anchor"
                  smooth={true}
                  style={{ color: '#EDCAA7' }}
                >
                  <h1>
                    <b>We Welcome All People</b>
                  </h1>
                  <h5>
                    Amidst a world-wide pandemic, job displacement due to
                    COVID-19, and a collective uprising demanding justice for
                    marginalized communities, we are in urgent need of attending
                    to our mental hygiene. We’ve created this app to create
                    accessibility to those struggling to find affordable
                    support. In our directory you’ll find professionals in your
                    area offering sliding-scale treatment based on your specific
                    needs while offering additional free resources for those who
                    are not quite ready to meet their therapist. We strive to
                    keep you engaged in your healing process with daily
                    reminders and a profile page that will keep track of your
                    moods and journal entries.
                  </h5>
                </ScrollLink>
              </p>
              <Link to={`/login`} activeClassName="active">
                <button className="loginWelcomeButton"></button>
              </Link>
              <Link to={`/signuppage`} activeClassName="active">
                <button className="newUserButton"></button>
              </Link>
            </div>
          </section>

          <section className="section2">
            <h1 id="anchor">
              <b>We Welcome All People</b>
            </h1>
            <div className="HowItWorksDescription">
              <Link to="/signuppage" className="signup">
                <button classname="signUpButton"></button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
