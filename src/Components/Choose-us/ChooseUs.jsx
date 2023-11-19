import  { useState } from "react";

import chooseImg from "../../assests/images/why-choose-us.png";
import "./choose-us.css";


const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <div>
        <div className="flex px-36 gap-20 py-10">
          <div >
            <div className="choose__content mt-10">
              <h2 className="text-2xl">Why Choose Us</h2>
              <p className="mt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt mollitia nostrum harum eos praesentium odit a sed quod
                aut fugit. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Reprehenderit omnis, culpa eligendi inventore perspiciatis
                minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores cupiditate facilis provident quidem accusamus impedit
                tenetur laboriosam debitis nisi eius!
              </p>
            </div>
          </div>

          <div >
            <div className="choose__img">
              {showVideo ? (
                <iframe width="560" height="315" src="https://www.youtube.com/embed/YJDbMZGEpMw?si=ABNysxTfrlWGvrBP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
