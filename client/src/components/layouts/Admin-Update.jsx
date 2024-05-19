import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAuth } from "../../store/auth"
import { toast } from "react-toastify"

export const AdminUpdate = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: ""
    })

    const params = useParams()
    const { authorizationToken, API } = useAuth()

    // GET Signle User Data
    const getSingleUserData = async () => {
        try {
            const response = await fetch(`${API}/api/admin/users/${params.id}`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken
                }
            })
            const data = await response.json();
            console.log(`Single User Data: ${data}`)
            setData(data)

            // if (response.ok) {
            //     getAllUsersData()

            // }

        } catch (error) {
            console.log("Error:", error);
        }

    }

    useEffect(() => {
        getSingleUserData();
    }, [])

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setData({
            ...data,
            [name]: value
        })

    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(`${API}/api/admin/users/update/${params.id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: authorizationToken
                },
                body: JSON.stringify(data)
            })
            if (response.ok) {
                toast.success("Updated Successfully")
            } else {
                toast.error("Not Updated")
            }

        } catch (error) {
            console.log(error)
        }

    }


    return (
        <section>
            <main>
                <div className="section-registration">
                    <div className='container grid grid-two-cols'>
                        <div className="contact-form">
                            <h1 className="main-heading mb-3">
                                Update User Data
                            </h1>
                            <br />
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">username</label>
                                    <input type="text" name='username' id='username' required autoComplete='off' value={data.username} onChange={handleInput} />
                                </div>
                                <div>
                                    <label htmlFor="email">email</label>
                                    <input type="email" name='email' id='email' required autoComplete='off' value={data.email} onChange={handleInput} />
                                </div>
                                <div>
                                    <label htmlFor="phone">phone</label>
                                    <input type="number" name='phone' id='phone' required autoComplete='off' value={data.phone} onChange={handleInput} />
                                </div>
                                <br />
                                <button type='submit' className='button'>
                                    Update
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </main>
        </section>
    )
}