import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

function CarouselPhotos() {
  const items = [
    {
      url: 'https://i.imgur.com/JM1ZWbW.jpg',
    },
    {
      url: 'https://i.imgur.com/G6agZYu.jpg',
    },
    {
      url: 'https://i.imgur.com/KdI9mbS.jpg',
    },
    {
      url: 'https://i.imgur.com/Alm12HU.jpg',
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
