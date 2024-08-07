import "./App.css";
import profileImage from "./assets/profile.jpeg";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Information from "./components/Information/Information";
import Interests from "./components/Interests/Interests";

function App() {
    return (
        <>
            <div className="container">
                <img className="profile-image" src={profileImage} />
                <Information />
                <About />
                <Interests />
                <Footer />
            </div>
        </>
    );
}

export default App;
