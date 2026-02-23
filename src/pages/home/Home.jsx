import Banner from "../../components/Banner";
import Professionals from "./components/professionals/Professionals";
import Reliable from "./components/reliable/Reliable";
import Reports from "./components/reports/Reports";
import TrackMovement from "./components/track-movment/TrackMovement";
import Works from "./components/work/Works";

const Home = () => {
    return (
        <div className="selection:bg-blue-500/15" style={{
            background: 'radial-gradient(circle at 20% 30%, #1a2332 0%, #0a0c10 100%)'
        }}>
            <Banner />
            <Works />
            <TrackMovement />
            <Reports />
            <Professionals />
            <Reliable/>
        </div>
    );
};

export default Home;