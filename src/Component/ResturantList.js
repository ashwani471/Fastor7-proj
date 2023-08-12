import React, { useState,useEffect } from 'react'
import Resturant from './Resturant';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ResturantList({sendDataToparent}) {
  const [data , setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getToken = () => {
      const token = localStorage.getItem('token');
          return token;
    };
    const fetchData = async () => {
      try {
        const token = getToken();
        const response = await axios.get('https://staging.fastor.in/v1/m/restaurant?city_id=118&&' , {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    // console.log(data);
    fetchData();
  }, []); 
  
  useEffect(() => {
    console.log(data);
  }, [data]);


  const handleClick = (restaurantId , resturant) => {
    console.log(restaurantId);
     navigate(`/resturant/${restaurantId}`)
     sendDataToparent(resturant);
  };

  return (
    <>
    <p className='' style={{marginLeft:"20px", fontSize:"25px" , fontWeight:"600"}}>Popular Ones</p>
    {
      data.map((resturant, index) => (
        <div onClick={()=>handleClick(resturant.restaurant_id , resturant)} key={resturant.restaurant_id}>
           <Resturant key={resturant.restaurant_id} restaurant={resturant}  />
        </div>
      ))
    }
    </>
  )
}

export default ResturantList
