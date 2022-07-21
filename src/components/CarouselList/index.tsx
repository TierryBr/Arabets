import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

import print1 from '../../img/prints/1.jpg';
import print2 from '../../img/prints/2.jpg';
import print3 from '../../img/prints/3.jpg';
import print4 from '../../img/prints/4.jpg';
import print5 from '../../img/prints/5.jpg';
import print6 from '../../img/prints/6.jpg';
import print7 from '../../img/prints/7.jpg';
import print8 from '../../img/prints/8.jpg';
import print9 from '../../img/prints/9.jpg';
import print10 from '../../img/prints/10.jpg';
import print11 from '../../img/prints/11.jpg';
import print12 from '../../img/prints/12.jpg';
import print13 from '../../img/prints/13.jpg';
import print14 from '../../img/prints/14.jpg';
import print15 from '../../img/prints/15.jpg';

function CarouselList() {
  const items = [
    {
      url: print1,
    },
    {
      url: print2,
    },
    {
      url: print3,
    },
    {
      url: print4,
    },
    {
      url: print5,
    },
    {
      url: print6,
    },
    {
      url: print7,
    },
    {
      url: print8,
    },
    {
      url: print9,
    },
    {
      url: print10,
    },
    {
      url: print11,
    },
    {
      url: print12,
    },
    {
      url: print13,
    },
    {
      url: print14,
    },
    {
      url: print15,
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
