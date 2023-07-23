import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Form, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";


const AdForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const college = useLoaderData();
    const { user } = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data);
        const saveUser = { university: college.name, uPhoto: college.picture, review: college.rating, name: data.name, email: data.email, subject: data.subject, phone: data.number, address: data.address, date: data.date, photo: data.photo }
        fetch('http://localhost:5000/apply', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    reset();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Application Submitted',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className="pt-32 pb-20 bg-[rgba(208,214,214,0.8)]">
            <div className="hero min-h-screen ">
                <div className="card flex-shrink-0 w-3/6 shadow-2xl bg-base-100">
                    <h1 className="text-center text-xl font-serif font-semibold mt-5">{college.name}</h1>
                    <Form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Candidate Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Candidate Name"
                                defaultValue={user?.displayName}
                                name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input type="text" {...register("subject", { required: true })} placeholder="Subject"
                                name="subject" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Candidate Email</span>
                            </label>
                            <input type="text" {...register("email", { required: true })} placeholder="Candidate email"
                                defaultValue={user?.email}
                                name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Phone number</span>
                            </label>
                            <input type="number" {...register("number", { required: true })} placeholder="Phone number"
                                name="number" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Address</span>
                            </label>
                            <input type="text" {...register("address", { required: true })} placeholder="Address"
                                name="address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Date of Birth</span>
                            </label>
                            <input type="date" {...register("date", { required: true })} placeholder="Address"
                                name="date" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" {...register("photo", { required: true })} placeholder="photo"
                            defaultValue={user?.photoURL}
                                name="photo" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Submit</button>
                        </div>

                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AdForm;