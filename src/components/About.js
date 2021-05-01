import Common from './Common';
import Web from '../images/team.svg';

function About() {
    return (
        <>
            <Common name="Welcome to about page" imgsrc={Web} visit="/contact" btname="Contact Now" />
        </>
    )
}

export default About;