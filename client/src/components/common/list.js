const List =()=>{
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
            <tr>
                <td>running</td>
                <td></td>
                <td></td>
                <td>Start</td>
            </tr>
        </tbody>
        </table>
        
        </>
    )
}
export default List