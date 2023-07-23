

const Achievement = () => {
    return (
        <div className="my-14 sm:mx-0 md:mx-20">
            <div className="text-center font-serif text-3xl">
                <h1>Our Achievement!!</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-14">
                <div className="card w-96 h-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="../../../public/image/star.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Outstanding Academic Performance</h2>
                    </div>
                </div>
                <div className="card w-96 h-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="../../../public/image/2nd.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Best Campus and Facilities</h2>
                    </div>
                </div>
                <div className="card w-96 h-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="../../../public/image/success.avif" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Community Engagement and Social Impact</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievement;