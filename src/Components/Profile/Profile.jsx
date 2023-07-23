import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Form, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const Profile = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const {_id} =useParams();
    const onSubmit = data => {
        const Update = { university: data.university, address: data.address}
        console.log(Update);
        fetch(`http://localhost:5000/applies/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Update)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(feedbackUpdate);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Sent Admin Feedback',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }

    return (
        <div className="py-28 bg-[#bbd1c8da]">
            <div className="flex
         justify-center">
                <div className="avatar online">
                    <div className="w-40 rounded-full">
                        <img src={user?.photoURL} />
                    </div>
                </div>
            </div>
            <div className="text-center mt-6">
                {/* You can open the modal using ID.showModal() method */}
                <button className="btn btn-warning" onClick={() => window.my_modal_4.showModal()}>Edit Profile</button>
                <dialog id="my_modal_4" className="modal">
                    <div method="dialog" className="modal-box w-11/12 max-w-5xl">

                        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                            <Form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} placeholder="name"
                                        defaultValue={user?.displayName}
                                        name="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" {...register("email", { required: true })} placeholder="email"
                                        defaultValue={user?.email}
                                        name="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">University</span>
                                    </label>
                                    <input type="text" {...register("university", { required: true })} placeholder="university"
                                        name="university" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input type="text" {...register("address", { required: true })} placeholder="address"
                                        name="address" className="input input-bordered" />
                                </div>

                                {/* <div className="form-control mt-6">
                                    <button className="btn btn-warning">Register</button>
                                </div> */}
                                <div className="modal-action">
                                    {/* if there is a button, it will close the modal */}
                                    <button className="btn btn-warning w-full">Save Details</button>
                                </div>


                            </Form>
                        </div>
                    </div>
                </dialog>
            </div>
            <div className="text-center mt-6">
                <p className="me-8 text-2xl font-serif font-bold">{user?.displayName}</p>
            </div>
            <div className="text-center mt-6">
                <p className="me-8 text-2xl font-serif font-bold">{user?.email}</p>
            </div>
            <div className="text-center mt-6">
                <p className="me-8 text-2xl font-serif font-bold">University Name</p>
            </div>
            <div className="text-center mt-6">
                <p className="me-8 text-2xl font-serif font-bold">Address:</p>
            </div>
        </div>
    );
};

export default Profile;