import React, { useState, useEffect } from 'react';
import { Flag, PersonFill, Book, Link as lk } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import NavBar from './NavBar.js';
import ConsentForm from '../pages/Home/ConsentForm';
import Popup from 'reactjs-popup';

export const Loading = () => {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('consent') !== null) {
      setConsented(true);
    }
  });
  return (
    <main>
      <NavBar />
      {consented === false && (
        <Popup modal defaultOpen={true}>
          <ConsentForm />
        </Popup>
      )}
      <header>
        <div className="top">
          <div class="mapBtn">
            <Link to="/map" className="map">
              View Map
            </Link>
          </div>
        </div>
      </header>
      <section className="intro">
        <h2>What is Human Rights Considered?</h2>
        <div class="icons">
          <Flag size={75} class="flag" />
          <PersonFill size={75} class="person" />
          <Book size={75} class="book" />
        </div>
        <p class="considered">
          Human Rights Considered is a public police brutality incident viewing
          application
        </p>
        <p class="considered-intro">
          Our goal is to provide information regarding a variety of police
          brutality incidents in an accurate and timely manner to public. The
          incidents have been categorized and can be filtered by types of force,
          location, and date.
        </p>
      </section>
      <section class="middle">
        <div class="how">
          <p class="work">How It Works? </p>
          <p class="explanation">
            We collect relevant incidents data from Twitter, Reddit, and police
            agencies to display it on the map
          </p>
        </div>
      </section>
      <section class="bottom-section">
        <h2>About Human Rights First</h2>
        <div class="bottom">
          <p class="organization">
            Human Rights First is an independent advocacy and action
            organization that challenges America to live up to its ideals. We
            believe American leadership is essential in the global struggle for
            human rights, so we press the U.S. government and private companies
            to respect human rights and the rule of law. When they fail, we step
            in to demand reform, accountability and justice. Around the world,
            we work where we can best harness American influence to secure core
            freedoms.
          </p>
          <lk size={30} class="link" />
          <a href="" class="learn">
            Learn more about us
          </a>
        </div>
      </section>
    </main>
  );
};
