import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

import photo1 from '../../img/photos/photo1.jpg';
import photo2 from '../../img/photos/photo2.jpg';
import photo3 from '../../img/photos/photo3.jpg';
import photo4 from '../../img/photos/photo4.jpg';

function CarouselPhotos() {
  const items = [
    {
      url: photo1,
    },
    {
      url: photo3,
    },
    {
      url: photo2,
    },
    {
      url: photo4,
    },
  ];

  return (
    <Carousel>
      {items.map((item) => (
        <Paper>
          <div
            style={{
              maxWidth: '50vh',
              flexGrow: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={item.url}
              alt='Quem somos'
              style={{
                height: '30rem',
                display: 'block',
                maxWidth: '100vh',
                width: '100%',
              }}
            />
          </div>
        </Paper>
      ))}
    </Carousel>
  );
}

export default CarouselPhotos;
