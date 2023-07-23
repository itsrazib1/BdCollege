


const Footer = () => {
    return (
        <div className="bg-[#0e1824] text-white py-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 text-center font-serif items-center">
                <div className="inline-flex justify-center items-center">
                    <h1 className="text-3xl font-semibold">BDCollege</h1>
                </div>
                <div>
                    <h1 className="text-2xl font-semibold mb-3">Services</h1>
                    <p>College Admission</p>
                    <p>College Facility</p>
                    <p>College Program</p>
                    <p>College Sports</p>
                </div>
                <div>
                    <h1 className="text-2xl font-semibold mb-3">Contact Us</h1>
                    <p>+880 3525444545</p>
                    <p>Email: itsrazib1@gmail.com </p>
                    <p>ADD: Sodor,Tangail,</p>
                    
                </div>
            </div>
            <hr className="mt-8 mx-20 border-black border-2" />
            <div className="text-center mt-10">
                <p>Copyright © 2023 - All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;