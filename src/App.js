import React from 'react'
import { Header, Navbar} from './components';
import { Footer, Hero, Grid} from './containers';

const App = () => {
  return (
    <div className = "App">
        <Header />
        <Navbar />

      <Hero />
      <Footer />

    </div>
  )
}

export default App