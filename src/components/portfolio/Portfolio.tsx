import Masonry from 'react-masonry-css';
import { SRLWrapper } from 'simple-react-lightbox';
import { FiPlus } from 'react-icons/fi';

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

export const Portfolio = () => {
  return (
    <section id="work" className="section theme-light dark-bg">
      <div className="container">
        <div className="title">
          <h3>My Portfolio</h3>
          <SRLWrapper>
            <a
              href="https://millionermin.github.io/Uber/"
              className="portfolio__item"
            >
              <img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/uber_bg.jpg'}`}
                alt="uber"
              />
            </a>

            <a href="/Pulse" className="portfolio__item">
              <img
                src={`${
                  process.env.PUBLIC_URL + '/img/portfolio/pulse_bg.jpg'
                }`}
                alt="pulse"
              />
            </a>

            <a
              href="https://millionermin.github.io/Food_JS/"
              className="portfolio__item"
            >
              <img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/food_bg.jpg'}`}
                alt="food"
              />
            </a>
          </SRLWrapper>
        </div>
      </div>
    </section>
  );
};
