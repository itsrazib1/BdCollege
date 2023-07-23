import img from '/public/image/pexels-pixabay-267885.jpg'

const Banner = () => {
    return (
        <div className="mt-20">
        <div className=" hero bg-base-200">
            <img className="w-full" src={img} alt="" />
            <div className="hero-content rounded-tl-3xl rounded-br-3xl text-center bg-[#e2dcdc] bg-opacity-60">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Admission going on</h1>
                    <p className="py-6">Choose the college of your choice and apply</p>
                    <button className="btn btn-accent">Apply Now</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Banner;