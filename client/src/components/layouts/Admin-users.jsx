import { useEffect, useState } from "react"
import { useAuth } from "../../store/auth"
import { Link } from "react-router-dom";

export const AdminUser = () => {

    const [users, setusers] = useState([])
    const { authorizationToken, API } = useAuth();

    const getAllUsersData = async () => {
        try {
            const response = await fetch(`${API}/api/admin/users`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken
                }
            })
            const data = await response.json();
            console.log("data:", data)
            setusers(data)

        } catch (error) {
            console.log(error)
        }

    }

    const deleteUser = async (id) => {
        try {
            console.log("ID:", id)
            const response = await fetch(`${API}/api/admin/users/delete/${id}`, {
                method: "delete",
                headers: {
                    Authorization: authorizationToken
                }
            })
            const data = await response.json();
            console.log(`Users After Delete: ${data}`)

            if (response.ok) {
                console.log("HEllo from response")
                getAllUsersData()
                console.log("HEllo from response")

            }

        } catch (error) {
            console.log(error);
        }

    }


    useEffect(() => {
        getAllUsersData()
    }, [])



    return (
        <>
            <section className="admin-users-section">
                <div className="container">
                    <h1>Admin Users Data</h1>
                </div>

                <div className="container admin-users">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((curUser, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{curUser.username}</td>
                                        <td>{curUser.email}</td>
                                        <td>{curUser.phone}</td>
                                        <td><Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link></td>
                                        <td><button onClick={() => deleteUser(curUser._id)}>Delete</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                </div>




            </section>
        </>
    )
}
