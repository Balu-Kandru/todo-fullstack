import "./style.css"

const Header=()=>{
    return (
        <>
        <div className="header" >
            <h1 className="app-name" >TODO</h1>
            <h3 className="mainpage-name" >{localStorage.getItem("user")}</h3>
        </div>
        </>
    )
}
export default Header