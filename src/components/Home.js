import Common from './Common';
import Web from '../images/rocket.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Home() {
    return (
        <>
            <Common name="Grow your business with" imgsrc={Web} visit="/service" btname="Get Started" />
        </>
    );
}

export default Home;