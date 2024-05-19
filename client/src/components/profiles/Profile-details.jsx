import { useEffect, useState } from "react"
import { useAuth } from "../../store/auth"
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ProfileDetails = () => {

    const [users, setusers] = useState([])
    const { authorizationToken, API } = useAuth();
    const navigate = useNavigate()


    const getProfileDetails = async () => {
        try {
            const response = await fetch(`${API}/api/auth/profile`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken
                },

            })

            const data = await response.json();
            console.log("data:", data.userData)
            setusers(data.userData)

        } catch (error) {
            console.log(error)
        }

    }

    const deleteProfile = async (id) => {
        try {
            console.log("ID:", id)
            const response = await fetch(`${API}/api/auth/profile/delete/${id}`, {
                method: "delete",
                headers: {
                    Authorization: authorizationToken
                }
            })
            const data = await response.json();
            console.log(`Users After Delete: ${data}`)
            if (response.ok) {
                navigate('/signup')
                toast.success("Profile Deleted! You have to sign up again.")
            }

        } catch (error) {
            console.log(error);
        }

    }


    useEffect(() => {
        getProfileDetails()
    }, [])



    return (
        <>
            <section className="admin-users-section">
                <div className="container">
                    <h1>Profile Details</h1>
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
                            <tr>
                                <td>{users.username}</td>
                                <td>{users.email}</td>
                                <td>{users.phone}</td>
                                <td><Link to={`/profile/profileDetails/${users._id}/edit`}>Edit</Link></td>
                                <td><button onClick={() => deleteProfile(users._id)}>Delete</button></td>


                            </tr>

                        </tbody>
                    </table>

                </div>




            </section>
        </>
    )
}
