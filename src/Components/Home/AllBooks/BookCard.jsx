import PropTypes from "prop-types";
import { Link} from "react-router-dom";
const BookCard = ({ book }) => {
    const { bookName, author, image, rating, category, tags, bookId } = book
    const handleDetails = () => {
    }
    return (
        <Link to={`/book/${bookId}`}>
            <div onClick={handleDetails}>
                <div className="card bg-base-100 border">
                    <figure className="px-10 pt-10">
                        <div className="bg-base-200 w-full flex justify-center py-5 rounded-2xl">
                            <img
                                src={image}
                                alt="Shoes"
                                className="rounded-xl h-64" />
                        </div>
                    </figure>
                    <div className="card-body">
                        <div className="flex gap-3 mb-3">
                            {
                                tags.map((tag, idx) =>
                                    <h5
                                        key={idx}
                                        className="text-primary bg-[#22be0a11] px-4 py-1 rounded-full"
                                    > {tag}
                                    </h5>
                                )
                            }
                        </div>
                        <h2 className="card-title font-playFair text-2xl font-bold">{bookName}</h2>
                        <p className="font-workSans text-[#131313]">By: {author}</p>
                        <hr className="my-2" />
                        <div className="flex justify-between font-workSans">
                            <p className="flex-grow-0">{category}</p>
                            <p className="flex-grow-0">{rating}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
BookCard.propTypes = {
    book: PropTypes.object
}
export default BookCard;