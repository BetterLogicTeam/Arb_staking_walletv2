import React from 'react'
import { useState } from 'react';
import Total_value from '../Total_value/Total_value'
import Updated from '../Updated/Updated';

function Main_home_page() {
    const [showw, setShoww] = useState(false);
  const handleClosee = () => setShoww(false);
  const handleShoww = () => setShoww(true);
  return (
    <div>
    <Total_value  setShoww={setShoww} />
    <Updated/>

      
    </div>
  )
}

export default Main_home_page
