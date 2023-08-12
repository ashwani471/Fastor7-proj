import React from 'react';
import './resturant.css';

function Resturant({restaurant}) {
  console.log(restaurant);
  const {restaurant_name , images  } = restaurant;
  const [{url}] = images;
  // const {location} = restaurant;
  // console.log(location);
  // const {location_locality} = location;
  // console.log(location_locality);
  let address = "Sadar Bazaar";
  if(restaurant.location !== null){
    const {location} = restaurant;
  if(location.location_locality !== null){
    address = location.location_locality;
  }
}

  
  return (
    <>
      <div className='outer_div'>
        <div className='rest_img'>
           <img src={url}  />
        </div>
        <div className='rest_detail'>
            <div className='rest_name'>
                <p className='name'>{restaurant_name}</p>
                <p className='recipies'>Pasta,Cakes,Pastry</p>
                <p className='address'>{address}</p>
            </div>
            <div className='offer'>
                <p></p>
            </div>
            {/* <div>

            </div> */}
        </div>
      </div>
    </>
  )
}

export default Resturant
