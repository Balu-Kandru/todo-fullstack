import Header from "./header"
import Navbar from "./navbar"
import List from "./list"
import { useNavigate } from "react-router-dom"

const Mainpage = () => {
    const navigate = useNavigate()
    return (
        <>
            <Header />
            <Navbar />
            <div className="create-one">
                <button className="create-page" onClick={() => navigate("/create")} >Add new activity</button>
            </div>
            <List />
        </>
    )
}
export default Mainpage