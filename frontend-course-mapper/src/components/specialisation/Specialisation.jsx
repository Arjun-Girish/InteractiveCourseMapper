import React from 'react'
import './specialisation.css';
import {useState} from "react";

const Specialisation = () => {
    const [title, setTitle] = useState('');

  return (
    
    <div className="search-container">
    
        <div>
            <h4>Please select your relevant course:</h4>
        </div>
        <div>
            <h3 class = "specialisation-name">ENGINEERING</h3>
        </div>
        <div>
            <div class="semester-block">
                <div class="course-block"><p> Aerospace Engineering</p></div>
                <div class="course-block"><p> Chemical Engineering</p></div>
                <div class="course-block"><p> Civil Engineering</p></div>
            </div>
            <div class="semester-block">
                <div class="course-block">
                    <p> Electrial Engineering</p>
                </div>
                <div class="course-block">
                    <p> Environmental Engineering</p>
                </div>
                <div class="course-block">
                    <p> Civil Engineering</p>
                </div>
            </div>
            <div class="semester-block">
                <div class="course-block">Mechanical Engineering</div>
                <div class="course-block">Robotics and Mechatronics</div>
                <div class="course-block">Software Engineering</div>
            </div>
        </div>
        <div id="submit_button">Submit</div>
  </div> 
    
  )
}


export default Specialisation

