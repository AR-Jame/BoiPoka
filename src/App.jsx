import { Outlet } from "react-router-dom"
import Navbar from "./Navbar/Navbar"

function App() {

  return (
    <div className="mx-[5%]">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
