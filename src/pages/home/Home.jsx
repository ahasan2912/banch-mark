import Banner from "../../components/Banner";
import Works from "./components/Works";

const Home = () => {
    return (
        <div className="selection:bg-blue-500/15" style={{
            background: 'radial-gradient(circle at 20% 30%, #1a2332 0%, #0a0c10 100%)'
        }}>
            <Banner />
            <Works />
        </div>
    );
};

export default Home;