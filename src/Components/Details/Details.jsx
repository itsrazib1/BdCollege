import { Link, useLoaderData } from "react-router-dom";


const Details = () => {
    const data = useLoaderData();
    const { picture, name, rating, admission, research, event, events, sport, sports } = data;
    console.log(data);

    return (
        <div className="py-28 bg-[rgba(208,214,214,0.8)]">
            <div className="card lg:card-side bg-base-100 shadow-xl mt-10 w-5/6 mx-auto">
                <figure><img className="w-2/3 h-96" src={picture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-serif">{name}</h2>
                    <p className="font-serif font-semibold mt-5">Rating: {rating}</p>
                    <p className="font-serif font-semibold">Admission date: {admission}</p>
                    <p className="font-serif font-semibold">Number of the research: {research}</p>
                    <div className="card-actions justify-end">
                        <Link to='/colleges'>
                            <button className="btn btn-warning">Go Back</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h1 className="text-2xl font-serif font-bold text-center mt-16">Events:</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center mt-10">
                    <div className="card w-5/6 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={event} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{events}</h2>
                        </div>
                    </div>
                    <div className="card w-5/6 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={sport} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{sports}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;