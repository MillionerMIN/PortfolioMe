import React from 'react';
import { About } from '../../components/about/About';
import { Header } from '../../components/header/Header';
import { Portfolio } from '../../components/portfolio/Portfolio';
import { Resume } from '../../components/resume/Resume';
import { Slider } from '../../components/slider/Slider';
import { useDocumentTitle } from '../../components/useDocumentTitle';

export const HomeOne = () => {
  useDocumentTitle('Personal Portfolio Page');
  document.body.classList.add('theme-light');

  return (
    <div className="main-left">
      <Header />
      {/* End Header Section */}

      <Slider />
      {/* End Slider Section */}

      <About />
      {/* End About Section */}

      <Resume />
      {/* End Resume Section */}

      <Portfolio />
    </div>
  );
};
