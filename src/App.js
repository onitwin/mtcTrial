import "./App.css";
import CentralContainer from "./containers/CentralContainer";
import GalleryContainer from "./containers/GalleryContainer";
import HeaderContainer from "./containers/HeaderContainer";
import NavBar from "./containers/Navbar";
import TestimonialsContainer from "./containers/TestimonialsContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeaderContainer />
      <CentralContainer />
      <TestimonialsContainer />
      <GalleryContainer />
    </div>
  );
}

export default App;
