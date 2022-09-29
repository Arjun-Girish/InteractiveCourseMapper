import React, {useState} from "react";
import './hero.css';

const Hero = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <div className="hero-container">

      <button 
      onClick={toggleModal}
      className="btn-modal">
        Create a new course plan
      </button>

      <button className="btn-modal">
        View saved course plans
      </button>

    {modal && (
    <div className="modal">
      <div className="overlay"></div>


      <div className="modal-content">

        <button
        className='close-modal'
        onClick={toggleModal}
        >close</button>

          <h1 className="modal-course-name">Name your course plan</h1>
          
          <form>
            <label>
              <input type="text" name="name" />
            </label>
          </form>

          
          <h1 className="modal-year-commencement">Year of commencement</h1>

          <form>
          <label>
            <select>
            <option value="2018-start">2018</option>
            <option value="2019-start">2019</option>
            <option value="2020-start">2020</option>
            <option value="2021-start">2021</option>
            <option value="2022-start">2022</option>
            <option value="2023-start">2023</option>

            </select>
          </label>
        </form>
          
          <h1 className="modal-study-load">Study load</h1>

          <form>
          <label>
            <select>
            <option value="full-time-study">Full-Time</option>
            <option value="part-time-study">Part-Time</option>
            </select>
          </label>
        </form>

        <h1 className="year-12-units">Which Year 12 Unit(s) have you completed?</h1>

          <form>
          <label>
            <input type="checkbox"/>
            <label for="maths-34">VCE Specisalist Mathemathics 3/4 </label>

            <input type="checkbox"/>
            <label for="physics-34">VCE Physics 3/4 </label>

          </label>
        </form>

        <a href="./Main.js">
          <button>Submit</button>
        </a>
      

        



      </div>

    </div>
    )}

    
    </div>
  )
}

export default Hero