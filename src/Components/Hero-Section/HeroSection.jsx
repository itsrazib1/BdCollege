
import heroImg from "../../assests/images/hero-img1.png";

const HeroSection = () => {
  return (
    <div>

      <div className="sm:flex flex-none w-full px-10 sm:px-96 py-28">
        <div>

          <div className="font-semibold ">
            <h2 className="mb-4 text-2xl sm:text-4xl ">
              Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
            </h2>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Aut saepe voluptatum earum delectus <br /> deserunt id iste,
              quas officiis et repellat!
            </p>
          </div>
          <div className="search flex items-center mt-5">
            <input
              type="text"
              placeholder="Search"
              className="border-none outline-none px-4 py-2 w-5/6"
            />
            <button className="btn ml-2">Search</button>
          </div>

        </div>
        <div>
          <img src={heroImg} alt="" className="sm:pt-1 pt-6 w-full hero__img" />

        </div>
      </div>


    </div>
  );
};

export default HeroSection;
