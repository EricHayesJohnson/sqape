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
      title="Kitchen Timer"
      page="/kitchenTimer"
      storyText="Modeled after an actual kitchen timer, it was chosen for its simple design 
      and limited functionality. In order to get the site up and running quickly, I 
      wanted the first component to be something relatively easy to design and implement. A timer is
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
