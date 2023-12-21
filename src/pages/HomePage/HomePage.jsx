import About from "../About/About";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Specialty from "../Specialty/Specialty";


const HomePage = () => {
    return (
        <div>

            {/* HomePage */}
            <Banner></Banner>
            <About></About>
            <Specialty></Specialty>
            <ContactUs></ContactUs>

        </div>
    );
};

export default HomePage;