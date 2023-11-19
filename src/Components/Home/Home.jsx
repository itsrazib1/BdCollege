
import AboutUs from "../About-us/AboutUs";
import ChooseUs from "../Choose-us/ChooseUs";
import Company from "../Company-section/Company";
import HeroSection from "../Hero-Section/HeroSection";
import Achievement from "./Achievement";
import Banner from "./Banner";
import Gallery from "./Gallery";


const Home = () => {
    return (
        <>
           
            <Banner/>
            <Gallery/>
            <Achievement/>
            {/* <HeroSection></HeroSection> */}
            {/* <AboutUs></AboutUs> */}
            <ChooseUs></ChooseUs>
            <Company></Company>
        </>
    );
};

export default Home;