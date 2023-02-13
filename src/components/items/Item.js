//Child component of home
import React from 'react'
import './Item.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import searchImages from '../../api/unsplashApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from "react-router-dom";

const Item = ({items}) => {
  /* let imageUrl = "";

  const handleImageRetreival = async (item) => {
    let result = await searchImages(item.name);
    item.picture = (result.urls.regular);
  }; */

  return (
    <div className='item-carousel-container'>
      <Carousel>
        {
          items.map((item) => {
            /* {handleImageRetreival(item)} */
            return (
              <Paper>
                <div className='item-card-container'> 
                  <div className='item-card' style={{"--img": `url(${item.picture})`}}>
                     <div className='item-detail'>
                        <div className='item-poster'>
                          <img src={item.picture} alt={item.name} />
                        </div>
                        <div className='item-name'>
                          <h3>{item.name}</h3>
                        </div>
                        <div className='item-buttons-container'>
                          <Link to={`/Video/${item.videoLink.substring(item.videoLink.length - 11)}`}>
                            <div className='play-button-icon-container'>
                              <FontAwesomeIcon 
                                className='play-button-icon'
                                icon = {faCirclePlay}>
                              </FontAwesomeIcon>
                            </div>
                          </Link>
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