import React from 'react'
import { Header, Navbar} from './components';
import { Footer, Hero} from './containers';

const App = () => {
  return (
    <div className = "App">
      <div className = "gradient__bg">
        <Header />
        <Navbar />
      </div>

      <Hero />
      <Footer />

    </div>
  )
}

export default App