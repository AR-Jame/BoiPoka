import { useEffect, useState } from "react";
import { getItem } from "../../../Utility";
import WishBook from "./WishBook";

const WishLists = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("../booksData.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    const storedData = getItem("wishList")
    const wishBook = data.filter(book => storedData.includes(book.bookId))
    return (
        <div>
            <div className="space-y-4">
                {
                    wishBook.length > 0 ?
                        wishBook.map(readBook =>
                            <WishBook
                                bookData={readBook}
                                key={readBook.bookId}
                            ></WishBook>)
                            :
                            <p className="font-workSans text-xl ">Please Select a book as Wish List to see here.</p>
                }
            </div>
        </div>
    );
};

export default WishLists;