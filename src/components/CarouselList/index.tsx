import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

function CarouselList() {
  const items = [
    {
      url: 'https://i.imgur.com/gjLTP1U.jpg',
    },
    {
      url: 'https://i.imgur.com/G6yETIf.jpg',
    },
    {
      url: 'https://i.imgur.com/H1oHoba.jpg',
    },
    {
      url: 'https://i.imgur.com/9dchBgP.jpg',
    },
    {
      url: 'https://i.imgur.com/dAOHxq2.jpg',
    },
    {
      url: 'https://i.imgur.com/HSWtHru.jpg',
    },
    {
      url: 'https://i.imgur.com/lBTi7IV.jpg',
    },
    {
      url: 'https://i.imgur.com/hTlMFpT.jpg',
    },
    {
      url: 'https://i.imgur.com/roNfjEO.jpg',
    },
    {
      url: 'https://i.imgur.com/slJASh6.jpg',
    },
    {
      url: 'https://i.imgur.com/kpV0jKE.jpg',
    },
    {
      url: 'https://i.imgur.com/cubvuYQ.jpg',
    },
    {
      url: 'https://i.imgur.com/CtSdTJh.jpg',
    },
    {
      url: 'https://i.imgur.com/R0SXfHz.jpg',
    },
    {
      url: 'https://i.imgur.com/8dREwDY.jpg',
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
              alt='prints'
              style={{
                height: '40rem',
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

export default CarouselList;
