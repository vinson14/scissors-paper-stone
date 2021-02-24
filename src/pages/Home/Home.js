import HomeBackground from "./components/HomeBackground";
import HomeTitle from "./components/HomeTitle";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-container container-fluid">
            <HomeBackground />

            <HomeTitle />
        </div>
    );
};

export default Home;
