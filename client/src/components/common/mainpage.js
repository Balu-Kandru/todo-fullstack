import Header from "./header"
import Navbar from "./navbar"
import List from "./list"
const Mainpage=()=>{
    return (
        <>
        <Header/>
        <Navbar/>
        <div className="create-one">
            <h3 className="create-text">Add new activity</h3>
        </div>
        <List/>
        </>
    )
}
export default Mainpage