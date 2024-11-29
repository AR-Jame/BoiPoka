import { FaBookmark } from "react-icons/fa";
import { IoPeopleOutline, IoBookOutline } from "react-icons/io5";


import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const WishBook = ({ bookData }) => {

    const { bookName, author, image, rating, category, totalPages, yearOfPublishing, publisher, tags, bookId } = bookData


    return (
        <div className="border p-4 rounded-2xl font-workSans">
            <div className="flex gap-10">
                <div className="rounded-xl bg-base-200 p-10">
                    <img src={image} className="w-44 h-48 object-contain" />
                </div>
                <div>
                    <h5 className="mb-2 font-playFair text-3xl font-semibold">{bookName}</h5>
                    <p className="font-medium mb-4">by: {author}</p>
                    <div className="flex gap-4 items-center mb-4">
                        <p><b>Tags:</b></p>
                        {
                            tags.map((tag, idx) => (
                                <h5
                                    key={idx}
                                    className="font-semibold text-primary bg-[#22be0a11] px-4 py-1 rounded-full"
                                > {tag}
                                </h5>
                            ))
                        }
                        <p className="flex gap-1 items-center"><FaBookmark /> Year of Publishing: {yearOfPublishing}</p>

                    </div>
                    <div className="flex gap-4">
                        <p className="flex items-center font-light gap-2"><IoPeopleOutline /> Publisher: {publisher}</p>
                        <p className="flex items-center font-light gap-2"><IoBookOutline /> Page: {totalPages}</p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex gap-2">
                        <p className="text-[#328EFF] bg-[#328eff23] px-4 py-1 rounded-full">Category:{category}</p>
                        <p className="text-[#FFAC33] bg-[#ffad3338] px-4 py-1 rounded-full">Rating: {rating}</p>
                        <Link to={`/book/${bookId}`}>
                            <p className="text-white bg-primary px-4 py-1 rounded-full">View Details</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

WishBook.propTypes = {
    bookData: PropTypes.object
}
export default WishBook;