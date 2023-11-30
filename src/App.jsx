import { BrowserRouter } from "react-router-dom";
import { usePopup } from "./PopupContext";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  TechMobile,
  Works,
  StarsCanvas,
  Popup,
} from "./components";
import { BrowserView, MobileView } from "react-device-detect";

const App = () => {
  const { visibility, message, closeModal } = usePopup();

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

        <BrowserView>
          <Tech />
        </BrowserView>
        <MobileView>
          <TechMobile />
        </MobileView>

        <Works />
        {/* WHEN YOU HAVE PEOPLE WHO CAN VOUCH FOR YOU, REMOVE THESE COMMENTS */}
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <Popup
        onClose={closeModal}
        show={visibility}
        title={message.title}
        content={message.content}
      />
    </BrowserRouter>
  );
};

export default App;
