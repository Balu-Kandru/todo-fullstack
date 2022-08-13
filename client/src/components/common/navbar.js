import { useNavigate } from "react-router-dom";
import "./style.css"
const Navbar=()=>{
    const navigate=useNavigate()
    const handleLogout=()=>{
        localStorage.setItem("authorization","");
        navigate("/");
    }
    return (
        <>
        <div className="navbar">
            <div className="nav-head">
                <h3>To do List</h3>
                <p>History</p>
            </div>
            <div className="logout" onClick={handleLogout} >
                Logout
            </div>
        </div>
        </>
    )
}

export default Navbar