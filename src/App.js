import "./GlobalStyle.scss";
import CentralContainer from "./containers/CentralContainer";
import GalleryContainer from "./containers/GalleryContainer";
import HeaderContainer from "./containers/HeaderContainer";
import NavBar from "./containers/Navbar";
import TestimonialsContainer from "./containers/TestimonialsContainer";
import FooterContainer from "./containers/FooterContainer";

function App() {
  return (
    <div className="out-most-wrapper">
      <div className="content">
        <HeaderContainer />
        <CentralContainer />
        <TestimonialsContainer />
        <GalleryContainer />
      </div>
      <footer>
        <FooterContainer />
      </footer>
    </div>
  );
}

export default App;
