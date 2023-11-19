

const Gallery = () => {
    return (
        <div className="mt-14 bg-slate-300 p-0  ">
            <div className="text-center font-serif text-3xl">
                <h1> Best Students Photo Gallery</h1>
            </div>
            <div className="grid grid-cols-2 pe-16 md:grid-cols-2 lg:grid-cols-4 gap-y-8 justify-items-center mt-14">
                <div className="card w-16 h-20 sm:w-72 sm:h-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="/image/1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Graduated!</h2>
                    </div>
                </div>
                <div className="card w-16 h-20 sm:w-72 sm:h-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="/image/2.webp" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Graduated!</h2>
                    </div>
                </div>
                <div className="card w-16 h-20 sm:w-72 sm:h-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="/image/3.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Graduated!</h2>
                    </div>
                </div>
                <div className="card w-16 h-20 sm:w-72 sm:h-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="/image/4.jpeg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Graduated!</h2>
                    </div>
                </div>
                <div className="card w-16 h-20 sm:w-72 sm:h-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="image/5.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Graduated!</h2>
                    </div>
                </div>
                <div className="card w-16 h-20 sm:w-72 sm:h-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="/image/6.webp" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Graduated!</h2>
                    </div>
                </div>
                <div className="card w-16 h-20 sm:w-72 sm:h-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="/image/7.webp" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Graduated!</h2>
                    </div>
                </div>
                <div className="card w-16 h-20 sm:w-72 sm:h-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="/image/8.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Graduated!</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;