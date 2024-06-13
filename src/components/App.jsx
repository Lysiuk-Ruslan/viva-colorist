// import React from 'react';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import AboutMe from './AboutMe/AboutMe';
import Advantages from './Advantages/Advantages';
import Favor from './Favor/Favor';
import Form from './Form/Form';
import MyWorks from './MyWorks/MyWorks';
import Footer from './Footer/Footer';

export const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <AboutMe />
        <Advantages />
        <Favor />
        <MyWorks />
        <Form />
      </main>
      <Footer />
    </div>
  );
};
