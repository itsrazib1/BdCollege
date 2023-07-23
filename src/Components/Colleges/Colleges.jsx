import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Colleges = () => {
    const { search } = useContext(AuthContext);

    const [data, setData] = useState([]);
    const url = ('http://localhost:5000/colleges')
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div >

            <div className="bg-[rgba(208,214,214,0.8)] pt-8 pb-24">
                <div className="mt-8 container mx-auto">
                    <div>
                        <h1 className="text-3xl font-serif font-semibold text-center mt-24">All Colleges:</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-14 gap-y-16 mt-14">
                        {
                           data.filter((item)=>{
                            return search.toLocaleLowerCase() === ''?item : item.name.toLowerCase().includes(search)
                        }).map(d =>
                                <div key={d._id}>
                                    <div className="card w-96 bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={d.picture} alt="Shoes" className="rounded-xl h-52" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">{d.name}</h2>
                                            <p className="font-serif font-semibold">College rating: {d.rating}</p>
                                            <p className="font-serif font-semibold">Admission date: {d.admission}</p>
                                            <p className="font-serif font-semibold">Number of the research: {d.research}</p>
                                            <div className="card-actions">
                                                <Link to={`/details/${d._id}`} >
                                                    <button className="btn btn-accent">Details</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Colleges;