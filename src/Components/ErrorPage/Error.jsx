import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex justify-center items-center h-[100vh]">
            <div>
                <p><span className="text-[170px]">404</span>Page not Found.</p>
                <Link to="/">
                    <button className="text-white px-5 py-2 bg-secendary btn hover:bg-secendaryHover">
                        Go Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;