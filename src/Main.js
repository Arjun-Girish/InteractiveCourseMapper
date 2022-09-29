import React from 'react'
import { Header, Navbar} from './components';
import { Footer, Grid} from './containers';
import './main.css';

const Main = () => {
  return (
    <div className = "Main">
        <Header />
        <Navbar />
        <Grid />
        

      <Footer />

    </div>
  )
}

export default Main