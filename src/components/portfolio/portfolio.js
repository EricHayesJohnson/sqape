import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { ItemBody, Title, Button, Story, ItemLink } from './styles';

const PortfolioItem = ({ title, page, storyText }) => {
  const [showStory, setShowStory] = useState(false);

  return (
    <>
      <ItemBody>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Title>{title}</Title>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button onClick={() => setShowStory(!showStory)}>story</Button>
            <Link to={page} style={ItemLink}>
              link
            </Link>
          </div>
        </div>
        {showStory ? <Story>{storyText}</Story> : null}
      </ItemBody>
    </>
  );
};

const Portfolio = () => (
  <>
    <PortfolioItem
      title="Laundry Day"
      page="/laundryDay"
      storyText="Keeping things simple, this prototype was imagined as a weather app that 
      informs the user if today is a good day to do laundry. Originally it was built using the weatherstack 
      api and the browsers geolocation but was then scaled back to use a toggle with hard coded values 
      to simulate a new request."
    />
    <PortfolioItem
      title="Kitchen Timer"
      page="/kitchenTimer"
      storyText="Modeled after an actual kitchen timer, this piece was chosen for its simple design 
      and limited functionality. In order to get the site up and running quickly, I 
      wanted the first component to be relatively easy to design and implement. A timer is
      usually a good place to start."
    />
  </>
);

PortfolioItem.propTypes = {
  title: PropTypes.string,
  page: PropTypes.string,
  storyText: PropTypes.string,
};

export default Portfolio;
