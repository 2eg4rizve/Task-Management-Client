import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>

            <div className="hero  h-[600px]  bg-contain  bg-no-repeat " style={{ backgroundImage: 'url(https://i.ibb.co/RjrgFCz/image.png)' }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content ">
                    <div className="">
                        <p className="mb-[10px] font-bold text-[20px]">Click here ... </p>
                        <Link to={'/login'}> <button className="btn btn-secondary border-4 border-red-600 text-[40px]">Let’s Explore </button></Link>
                    </div>
                    
                </div>
            </div>

           

        </div>
    );
};

export default Banner;

//Built For