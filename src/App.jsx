import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const  App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* WHEN YOU HAVE WORK EXPERIENCE, REMOVE THESE COMMENTS */}
        {/* <Experience /> */}

        {/* <Tech /> */}

        <Works />
        {/* WHEN YOU HAVE PEOPLE WHO CAN VOUCH FOR YOU, REMOVE THESE COMMENTS */}
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
