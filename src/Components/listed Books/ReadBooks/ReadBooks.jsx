import ReadBook from "./ReadBook";
import PropTypes from "prop-types";


const ReadBooks = ({readBooks}) => {

    return (
        <div>
            <div className="space-y-4">
                {
                    readBooks.length > 0 ?
                        readBooks.map(readBook =>
                            <ReadBook
                                bookData={readBook}
                                key={readBook.bookId}
                            ></ReadBook>)
                            :
                            <p className="font-workSans text-xl ">Please Select a book as read to see here.</p>
                }
            </div>
        </div>
    );
};
ReadBooks.propTypes = {
    readBooks: PropTypes.array
}
export default ReadBooks;