import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import star from '../Assets/Star.jpg';
import trend from '../Assets/teenyicons_discount-outline.jpg';
import './resturantDetail.css';

function RestaurantDetails(props) {
     const {rest} = props;  
     const images = rest.images[0].url;
 //------- This will happen when i want  fetch perticular item with respect to id ----- 
//   const [restaurant, setRestaurant] = useState(null);
//   const { id } = useParams();
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `https://staging.fastor.in/v1/m/restaurant/${id}`
//         );
//         setRestaurant(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [id]);

  return (
    <>
      {rest ? (
        <div>
        <div className='image'>
           <img src={images} alt='image'/>
        </div>
            
            <footer>
                <div className='outer-div'>
                   <div className='detail-rating'>
                        <div className='returant_details'>
                            <p className='rest_name'>{rest.restaurant_name}</p>
                            <p className='rest_loc'>{rest.location.location_locality}</p>
                        </div>
                        <div className='ratings'>
                            <img src={star} alt='star-img' />
                            <span>{rest.rating.restaurant_avg_rating}</span>
                        </div>
                   </div>
                    <div className='trending'>
                        <img src={trend} />
                        <span >4 offers Trending</span>
                    </div>
                    <p className='description'>Our delicate vanilla cake swirled with chocolate and filled with mocha chocolate chip cream and a layer of dark chocolate ganache</p>
                </div>
            </footer>
         </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default RestaurantDetails;
