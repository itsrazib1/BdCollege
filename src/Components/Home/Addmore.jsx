

const Addmore = () => {
    return (
        <div className="px-20 pb-20">
            <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/RHm36PS/berry-college-historic-campus-at-twilight-royalty-free-image-1652127954.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello Student's</h1>
                        <p className="mb-5">
                            College education provides essential knowledge, critical thinking skills, and a foundation for professional success. It fosters personal growth, expands perspectives, and opens doors to diverse opportunities. Additionally, many careers require a degree as a prerequisite, making college an invaluable investment in one's future.
                        </p>
                        <button className="btn btn-accent"><a href="/login">Join Now</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addmore;