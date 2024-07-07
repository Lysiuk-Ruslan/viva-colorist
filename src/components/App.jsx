import React from 'react';

import { GlobalStyle } from './GlobalStyles';

// import Header from './Header/Header';
// import Banner from './Banner/Banner';
import AboutMe from './AboutMe/AboutMe';
import Advantages from './Advantages/Advantages';
import Favor from './Favor/Favor';
import MyWorks from './MyWorks/MyWorks';
import Form from './Form/Form';
// import Certificate from './Certificate/Certificate';
// import Footer from './Footer/Footer';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* <Header /> */}
      <main>
        {/* <Banner /> */}
        <AboutMe />
        <Advantages />
        <Favor />
        <MyWorks />
        <Form />
        {/* <Certificate />  */}
      </main>
      {/* <Footer /> */}
    </>
  );
};
