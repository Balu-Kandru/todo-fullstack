import axios from "axios"
import { useEffect, useState } from "react"
import { baseUrl } from "../utilities"

const List = () => {
    const [activities, setactivities] = useState([])
    useEffect(() => {
        const data = {
            username: localStorage.getItem("user")
        }

        axios.get(`${baseUrl}/list/show`, { headers: data }).then((data) => {
            setactivities(data.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <>
            <table border={1} className='list-table'>
                <thead>
                    <tr>
                        <th>Activity</th>
                        <th>Status</th>
                        <th><div>Time taken</div><div>(Hrs:Min:Sec)</div></th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        activities.map((element) => {
                            return (
                                <tr>
                                    <td>{element.activity}</td>
                                    <td>{element.status}</td>
                                    <td></td>
                                    <td>{element.Action}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

        </>
    )
}
export default List