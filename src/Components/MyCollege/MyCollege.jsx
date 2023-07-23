import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";"react-router-dom";
import { useForm } from "react-hook-form";
import { Form} from "react-router-dom";


const MyCollege = () => {
    const { user } = useContext(AuthContext);
    const [apply, setApply] = useState([]);

    const url = `http://localhost:5000/myCollege?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setApply(data))
    }, [url])
    console.log(apply);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        // const saveUser = { review: data.review }
        // fetch(`http://localhost:5000/applies/${_id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(saveUser)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             reset();
        //             Swal.fire({
        //                 position: 'center',
        //                 icon: 'success',
        //                 title: 'Set review',
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             })
        //         }
        //     })
    }
    return (
        <div className="pt-32 pb-20 bg-[rgba(208,214,214,0.8)]">
            <div>
                {
                    apply.map(d => <div key={d._id} className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img className="" src={d.uPhoto} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{d.university}</h2>
                            <img className="rounded-xl" src={d.photo} alt="" />
                            <p>Name: {d.name}</p>
                            <p>Subject: {d.subject}</p>
                            <p>Date of Birth: {d.date}</p>
                            <p>Email: {d.email}</p>
                            <p>Phone: {d.phone}</p>
                            <p>Address: {d.address}</p>
                            <p>Review: {d.review}</p>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Review</span>
                                    </label>
                                    <input type="number" {...register("review", { required: true })} placeholder="Review"
                                        defaultValue={d.review}
                                        name="review" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-warning">Submit</button>
                                </div>
                            </Form>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyCollege;