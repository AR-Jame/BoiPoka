import { Link } from "react-router-dom";
import HeroImg from "../../../Assests/pngwing 1.png";
const Hero = () => {
    return (
        <div>
            <div className="hero bg-base-200 rounded-xl">
                <div className="justify-between w-full py-16 hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={HeroImg}
                        className="" />
                    <div>
                        <h1 className="text-5xl font-bold font-playFair leading-snug">Books to freshen up <br /> your bookshelf</h1>
                        <br />
                        <Link to="/listed">
                        <button className="btn bg-primary text-white hover:bg-primaryHover">Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;