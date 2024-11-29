import { useState, useEffect } from "react";
import ReadBooks from "./ReadBooks/ReadBooks";
import WishLists from "./WishList/WishLists";
import { getItem } from "../../Utility";

const ListedBooks = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("../booksData.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    const storedData = getItem("readBook")

    const [sorted, setSorted] = useState([])
    useEffect(() => {
        if (data.length > 0 && storedData.length > 0) {
            const readBooks = data.filter(book => storedData.includes(book.bookId))
            setSorted(readBooks)
        }

    }, [data])
    const handleSort = (e) => {
        const forSort = [...sorted]

        if (e.target.innerText === "Rating") {
            forSort.sort((a, b) => b.rating - a.rating)
            setSorted(forSort)

        } else if (e.target.innerText === "Number of Pages") {
            forSort.sort((a, b) => b.totalPages - a.totalPages)
            setSorted(forSort)
        } else if (e.target.innerText === "Publishing Date") {
            forSort.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
            setSorted(forSort)
        }

    }
    return (
        <div>
            <div className="text-right mt-5">
                <details className="dropdown">
                    <summary className="btn m-1">Short By</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-44 p-2 shadow">
                        <li><a onClick={handleSort}>Rating</a></li>
                        <li><a onClick={handleSort}>Number of Pages</a></li>
                        <li><a onClick={handleSort}>Publishing Date</a></li>
                    </ul>
                </details>
            </div>
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab text-lg" aria-label="Read" defaultChecked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <ReadBooks readBooks={sorted}></ReadBooks>
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab text-lg"
                    aria-label="Wish List" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <WishLists></WishLists>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;