import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getItem, setItem } from "../../../Utility";
import { useState } from "react";


const BookDetails = () => {
    const { Id } = useParams()
    const books = useLoaderData()
    const specificBook = books.find(book => book.bookId == Id)
    const {
        image,
        bookName,
        totalPages,
        rating,
        publisher,
        yearOfPublishing,
        author,
        category,
        review,
        tags,
        bookId } = specificBook
    // Its only use to reload the page
    const [Values, setValuse] = useState([])
    const [ListWish, setListWish] = useState([])
    console.log(Values);
    console.log(ListWish);
    //
    const ReadValue = getItem("readBook");
    const wishValue = getItem("wishList");


    const handleWish = (Id) => {
        if (!wishValue.includes(Id) && !ReadValue.includes(Id)) {
            toast("added to wishlist")
            setItem(Id, "wishList")
            setListWish(Id)
        } else {
            toast.info("this book is add as read")
        }
    }

    const handleRead = (Id) => {
        if (!ReadValue.includes(Id) && !wishValue.includes(Id)) {
            toast("added this book successfully!!!")
            setItem(Id, "readBook")
            setValuse(Id)

        } else {
            toast.info("This book is already added")
        }
    }

    return (
        <div className="font-workSans">
            <div className="flex gap-10">
                <div className="flex-1 max-h-[78vh] bg-base-200 py-20 ">
                    <img src={image} className="h-full w-auto mx-auto object-contain" />
                </div>
                <div className="flex-1 ">
                    <h2 className="mb-4 font-playFair text-6xl font-semibold">{bookName}</h2>
                    <h6 className="text-lg font-medium">By: {author}</h6>
                    <hr className="my-4" />
                    <p className="text-lg">{category}</p>
                    <hr className="my-4" />
                    <p>
                        <span className="font-bold">Review : </span>
                        {review}
                    </p>
                    <div className="flex gap-3 mt-5">
                        <p className="font-extrabold">Tag : </p>
                        <div className="flex gap-2">
                            {
                                tags.map((tag, idx) =>
                                    <p
                                        key={idx}
                                        className="text-primary bg-[#22be0a11] px-4 py-1 rounded-full"
                                    >
                                        #{tag}
                                    </p>
                                )
                            }
                        </div>
                    </div>
                    <hr className="my-8" />
                    <div className="">
                        <div className="flex gap-7">
                            <div className="text-[#131313a9]">
                                <p>Number OF Pages:</p>
                                <p>Publisher:</p>
                                <p>Year of Publishing:</p>
                                <p>Rating:</p>

                            </div>
                            <div className="font-medium">
                                <p>{totalPages}</p>
                                <p>{publisher}</p>
                                <p>{yearOfPublishing}</p>
                                <p>{rating}</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-x-5 mt-8">
                        <button
                            onClick={() => handleRead(bookId)}
                            className="btn px-7 bg-transparent hover:bg-transparent">Read</button>
                        <button
                            onClick={() => handleWish(bookId)}
                            className="btn text-white bg-secendary hover:bg-secendaryHover">WishList</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;