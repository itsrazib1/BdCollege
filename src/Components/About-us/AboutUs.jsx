
import "./about.css";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <div>
        <div className="flex px-28 gap-10 ">
          <div >
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </div>

          <div >
            <div className=" about__content">
              <h2 className="font-extrabold  text-5xl">About Us</h2>
              <p className="pt-4 pb-4" >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi <br /> cupiditate  animi deserunt libero nesciunt corporis
                explicabo nobis ex quo molestiae!
              </p>

              <div className="about__counter ">
                <div className=" flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Completed Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Patient Around World</p>
                  </div>
                </div>

                <div className=" flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Ideas Raised Funds</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Categories Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
