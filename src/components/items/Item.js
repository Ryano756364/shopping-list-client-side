//Child component of home
import React from 'react'
import './Item.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const Item = ({items}) => {

  return (
    <div className='item-carousel-container'>
      <Carousel>
        {
          items.map((item) => {
            return (
              <Paper>
                <div className='item-card-container'> 
                  <div className='item-card'>
                     <div className='item-detail'>
                        <div className='item-poster'>
                          <img src="./logo.png" alt="random image" />
                        </div>
                        <div className='item-name'>
                          <h3>{item.name}</h3>
                        </div>
                     </div>
                  </div>
                </div>
              </Paper>
            )
          })
        }
      </Carousel>
    </div>
  )
}

export default Item