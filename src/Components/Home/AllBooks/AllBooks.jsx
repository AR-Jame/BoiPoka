import BookCard from "./BookCard";
import { useLoaderData } from "react-router-dom";

const AllBooks = () => {
    const books = useLoaderData()
    return (
        <div className="mt-16">
            <h1 className="mb-10 font-playFair text-center text-5xl font-semibold">Books</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {
                books.map(book => <BookCard key={book.bookId} book={book}/>)
            }
            </div>
        </div>
    );
};

export default AllBooks;