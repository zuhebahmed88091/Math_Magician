import React from 'react';
import classes from '../styles/Home.module.css';

const Home = () => (
  <article className={classes.home}>
    <h1>Welcome to my page</h1>
    <p>
      For all math lovers, there is a website called Math Magicians.
      It is a Single Page App (SPA) that enables users to read a random quote about arithmetic
      and perform basic calculations. Enjoy
    </p>
    <footer className={classes.footer}>© Zuheb Ahmed</footer>
  </article>
);

export default Home;
