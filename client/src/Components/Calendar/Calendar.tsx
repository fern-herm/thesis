import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarApp = () =>{
  const [value, onChange] = useState(new Date());
  
  return (
    <div>
      <Calendar onChange={onChange} 
        value={value}
      />
      {value.toString()}
  
    </div>
  );
};

CalendarApp.propTypes = {};

export default CalendarApp;

