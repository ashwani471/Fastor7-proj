import React, { useState } from 'react';
import { BrowserRouter as Router,Routes, Route, Switch , Navigate} from 'react-router-dom';
import ResturantList from "./Component/ResturantList";
import MobileNumber from "./pages/MobileNumber";
import Otp from "./pages/Otp";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import NotFound from './pages/NotFound';
import ResturantDetails from './Component/ResturantDetails';

function App() {
  const [rest , setRest] = useState([]);
  const [mobileNum , setMobileNum] = useState("");
  // const navigate = useNavigate();
  const handleChildData =async(data)=>{
    console.log(data);
    setMobileNum(data.number);

  }

  const handleData = (data) => {
    console.log(data);
    setRest(data);
  }

  const checkAuth = () => {
    const token = localStorage.getItem('token');
    return token !== null;
  };

  return (
    <Router>
    <Routes>
      <Route 
       path="/" 
       element={
              <MobileNumber 
                sendDataToparent={handleChildData}
              />
              } 
      />
      <Route path="/otp" element={<Otp mobileNum = {mobileNum} />} />
      {/* <Route path="/resturant" element={<ResturantList />} /> */}
      <Route
          path="/resturant"
          element={
            checkAuth() ? (
              <ResturantList sendDataToparent={handleData} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
    
      <Route path="*" element={<NotFound />} />
      <Route path="/resturant/:id" element={<ResturantDetails rest={rest} />} />
    </Routes>
  </Router>
  
  );
}

export default App;
