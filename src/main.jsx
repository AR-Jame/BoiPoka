import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Error from './Components/ErrorPage/Error.jsx';
import BookDetails from './Components/Home/BookDetails/BookDetails.jsx';
import ListedBooks from './Components/listed Books/ListedBooks.jsx';
import Bar from './Components/PageBar/PageBar.jsx';
import Form from './Components/Form/Form.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:() => fetch("../booksData.json") 
      },
      {
        path: "/book/:Id",
        element: <BookDetails></BookDetails>,
        loader:() => fetch("../booksData.json")
      },
      {
        path: "/listed",
        element: <ListedBooks></ListedBooks>
      },
      {
        path: "/pageBar",
        element: <Bar></Bar>
      },
      {
        path: "/forms",
        element: <Form></Form>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
