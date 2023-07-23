import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <img src="/image/404.jpg" alt="" />
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <Link to='/'>
                        <button className="btn btn-outline btn-accent ">Go To Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;