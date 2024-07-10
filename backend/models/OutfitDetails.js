//outfitdetails.js

import React, { useEffect, useState } from 'react';
import OutfitItem from './OutfitItem';
import styled from 'styled-components';

const DetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const OutfitDetails = () => {
  const [outfits, setOutfits] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/outfits')
      .then((response) => response.json())
      .then((data) => setOutfits(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <DetailsContainer>
      {outfits.map((outfit) => (
        <OutfitItem
          key={outfit._id}
          outfit={outfit}
        />
      ))}
    </DetailsContainer>
  );
};

export default OutfitDetails;

