import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { ItemBody, Title, Button, Story, ItemLink } from './styles';

const PortfolioItem = ({ title, page, mainText, subText }) => {
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
        {showStory ? (
          <Story>
            <h3 style={{ margin: 0 }}>Summary</h3>
            {mainText}
            <h3 style={{ marginBottom: 0 }}>Area of interest</h3>
            <div>{subText}</div>
          </Story>
        ) : null}
      </ItemBody>
    </>
  );
};

const Portfolio = () => (
  <>
    <PortfolioItem
      title="Inner App"
      page="/innerApp"
      mainText="This is envisioned as a mobile app for setting short term goals that can be shared 
      with a group of friends. The full functionality and design is incomplete but still serves as 
      a context to design some user interactions and a custom option select menu. In addition 
      this prototype was used as a means to explore some of the more advanced features of the Emotion library."
      subText="Working in the confines of a mobile device fame and using animation to communicate direction."
    />
    <PortfolioItem
      title="Covid Graph"
      page="/covidGraph"
      mainText="I read somewhere that 2020 was the year data visualization entered the mainstream.
      I imagine in part due to the coronavirus and the many infographics it produced. I decided to dip my toes, 
      but more than anything wanted a reason to play around with D3. Data provided by The COVID Tracking Project API."
      subText="How modifying the time range via the slider influences the interpretation of the data."
    />
    <PortfolioItem
      title="Laundry Day"
      page="/laundryDay"
      mainText="This prototype was imagined as a weather app that does one thing, informs the user on whether 
      or not today is a good day to do laundry. Originally it was built using the weatherstack api and the browser's 
      geolocation, but was later scaled back to use a toggle with hard coded values."
      subText="Using common components to display information. i.e. using a progress bar to indicate cloud coverage 
      and a loading spinner that resembles a washing machine in motion."
    />
    <PortfolioItem
      title="Kitchen Timer"
      page="/kitchenTimer"
      mainText="Modeled after an actual kitchen timer, it was chosen for its simple design 
      and limited functionality. In order to get the site up and running quickly, I 
      wanted the first component to be relatively easy to design and implement. A timer is
      usually a good place to start."
      subText="How the reset functionality is completely intuitive when holding the physical device but unintuitive when on screen."
    />
  </>
);

PortfolioItem.propTypes = {
  title: PropTypes.string,
  page: PropTypes.string,
  mainText: PropTypes.string,
  subText: PropTypes.string,
};

export default Portfolio;
