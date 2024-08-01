import About from "./components/About";
import Information from "./components/Information/Information";
import profileImage from "./assets/profile.jpeg";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <img className="profile-image" src={profileImage} />
        <Information />
        <About />
      </div>
    </>
  );
}

export default App;
