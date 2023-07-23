import { Link, useLoaderData } from "react-router-dom";


const Admission = () => {
    const data = useLoaderData();

    return (
        <div className="py-28 bg-[rgba(199,255,255,0.8)]">
            <div>
                <h1 className="text-2xl font-serif font-bold text-center mt-5">For Admission:</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-8 mt-14">
                {
                    data.map(d => <Link to={`/adForm/${d._id}`} key={d._id}>
                        <button className="btn card w-96 h-20 bg-base-100 shadow-xl">
                            <div className="card-body text-center font-serif font-bold">
                                <p>{d.name}</p>
                            </div>
                        </button>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Admission;