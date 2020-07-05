import React from 'react';


const WeatherForcast = () => {

   return (
      <div>
         <div className='header'>
            <h2 className="text-primary">Weather Forcast</h2>
         </div>

         <div className="instructions">
            <p>Enter a US zipcode below to get the current weather conditions for that area.</p>
         </div>

         <div className='zipcodeInput'>
	  <form method='POST' action='/search-location'>
	     <input type='text' placeholder='Enter zipcode..' name='zipcode'/>
	     <button>ENTER</button>
	  </form>
         </div>
      </div>
   )
}

export default WeatherForcast